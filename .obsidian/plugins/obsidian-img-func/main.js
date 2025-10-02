// obsidian-img-func: IMG() & Wiki → dual <img> (HTML-safe)
// - img(file.png) / img("file name.png", 520) → 두 줄 <img>
// - ![[file.png]] / ![[file.png|520]] → 자동으로 img(...) -> 두 줄 <img>
// - 붙여넣기/드롭 직후 자동 변환 + 수동 명령(현재 줄/문서 전체)
// - 코드펜스 ``` 내부는 변경하지 않음, 들여쓰기 유지

const { Plugin, MarkdownView, Notice } = require("obsidian");

const DEFAULT_BASE = "assets/posts/img/";
const DEFAULT_WIDTH = 400;

// img(file.png) | img("file name.png") | img(file.png, 500) | img('file name.png',600)
const IMG_FUNC_RE = /img\(\s*["']?([^"',)]+)["']?\s*(?:,\s*(\d+))?\s*\)/g;

// ![[file.png]] | ![[file name.png]] | ![[file.png|520]]
const WIKI_IMG_RE = /!\[\[([^|\]]+)(?:\|([^|\]]+))?\]\]/g;

/** 주어진 파일명/width/들여쓰기 기준으로 두 줄 <img> HTML을 만든다 */
function buildSnippet(fname, width, indent) {
  const alt = fname.replace(/\.\w+$/, "").replace(/[_-]+/g, " ");
  const obsidianPath = `${DEFAULT_BASE}${fname}`;
  const sitePath     = `/${DEFAULT_BASE}${fname}`; // 인코딩 X

  return [
    `${indent}<div style="text-align:center;">`,
    `${indent}  <img class="obsidian-only" src="${obsidianPath}" alt="${alt}" width="${width}" style="margin-top:40px;">`,
    // Jekyll에서만 인코딩 수행: relative_url | uri_escape
    `${indent}  <img class="site-only" src="{{ '${sitePath}' | relative_url | uri_escape }}" alt="${alt}" width="${width}" style="margin-top:40px;">`,
    `${indent}</div>`
  ].join('\n');
}


/** 한 줄에서 img(...)를 두 줄 <img>로 치환 (들여쓰기 유지) */
function expandLineKeepingIndent(text) {
  let changed = false;
  const leading = text.match(/^(\s*)/);
  const indent = leading ? leading[1] : "";
  const replaced = text.replace(IMG_FUNC_RE, (_, fname, widthStr) => {
    changed = true;
    const width = widthStr ? widthStr : DEFAULT_WIDTH;
    return buildSnippet(fname.trim(), width, indent);
  });
  return { replaced, changed };
}

/** upToIndex 라인까지 코드펜스 짝 확인 → 홀수면 내부 */
function isInsideFencedCodeUntil(lines, upToIndex) {
  let fence = 0;
  for (let i = 0; i <= upToIndex && i < lines.length; i++) {
    if (/^\s*```/.test(lines[i])) fence++;
  }
  return fence % 2 === 1;
}

/** ![[...]] → img(...) 로 1차 변환 (width는 숫자만 인식) */
function wikiToImgCalls(text) {
  return text.replace(WIKI_IMG_RE, (_m, fnameRaw, opt) => {
    const fname = fnameRaw.trim();
    const needsQuote = /\s/.test(fname);
    const quoted = needsQuote ? `"${fname}"` : fname;

    let widthPart = "";
    if (opt && /^\d+$/.test(opt.trim())) widthPart = `, ${opt.trim()}`;

    return `img(${quoted}${widthPart})`;
  });
}

module.exports = class ImgFuncPlugin extends Plugin {
  onload() {
    console.log("[obsidian-img-func] loaded");

    // ───── 명령: 현재 줄의 img() 확장 ─────
    this.addCommand({
      id: "expand-img-here",
      name: "Expand img() on current line (HTML-safe)",
      editorCallback: (editor) => {
        try {
          const cur = editor.getCursor();
          const lines = editor.getValue().split("\n");
          if (isInsideFencedCodeUntil(lines, cur.line)) return;
          const lineText = editor.getLine(cur.line);

          // 먼저 위키 → img(...) (혹시 현재 줄에 ![[...]]가 있다면)
          const step1 = wikiToImgCalls(lineText);
          // 그 다음 img(...) → 두 줄 <img>
          const { replaced, changed } = expandLineKeepingIndent(step1);
          if (changed || step1 !== lineText) {
            editor.replaceRange(replaced, { line: cur.line, ch: 0 }, { line: cur.line, ch: lineText.length });
          }
        } catch (e) {
          new Notice("Expand failed. See console.");
          console.error(e);
        }
      }
    });

    // ───── 명령: 문서 전체 img() 확장 ─────
    this.addCommand({
      id: "expand-img-all",
      name: "Expand ALL img() in current file (HTML-safe)",
      editorCallback: (editor) => {
        try {
          const lines = editor.getValue().split("\n");
          let touched = false;
          for (let i = 0; i < lines.length; i++) {
            if (isInsideFencedCodeUntil(lines, i)) continue;
            const step1 = wikiToImgCalls(lines[i]); // 위키 → img(...)
            const { replaced, changed } = expandLineKeepingIndent(step1); // img(...) → <img>
            if (changed || step1 !== lines[i]) {
              lines[i] = replaced;
              touched = true;
            }
          }
          if (touched) editor.setValue(lines.join("\n"));
        } catch (e) {
          new Notice("Expand-all failed. See console.");
          console.error(e);
        }
      }
    });

    // ───── 명령: 현재 줄 위키 이미지 → 두 줄 <img> (직접 호출용) ─────
    this.addCommand({
      id: "wiki-img-to-dualimg-here",
      name: "Convert wiki image to dual <img> on current line",
      editorCallback: (editor) => {
        const cur = editor.getCursor();
        const line = editor.getLine(cur.line);
        const step1 = wikiToImgCalls(line);
        const { replaced, changed } = expandLineKeepingIndent(step1);
        if (changed || step1 !== line) {
          editor.replaceRange(replaced, { line: cur.line, ch: 0 }, { line: cur.line, ch: line.length });
        }
      }
    });

    // ───── 명령: 문서 전체 위키 이미지 → 두 줄 <img> ─────
    this.addCommand({
      id: "wiki-img-to-dualimg-all",
      name: "Convert ALL wiki images to dual <img> in current file",
      editorCallback: (editor) => {
        const lines = editor.getValue().split("\n");
        let touched = false;
        for (let i = 0; i < lines.length; i++) {
          const step1 = wikiToImgCalls(lines[i]);
          const { replaced, changed } = expandLineKeepingIndent(step1);
          if (changed || step1 !== lines[i]) {
            lines[i] = replaced;
            touched = true;
          }
        }
        if (touched) editor.setValue(lines.join("\n"));
      }
    });

    // ───── 자동: 붙여넣기/드롭 직후 현재 줄 자동 변환 ─────
    const afterPasteOrDrop = (editor) => {
      try {
        const cur = editor.getCursor();
        const all = editor.getValue().split("\n");
        if (isInsideFencedCodeUntil(all, cur.line)) return;
        const lineText = editor.getLine(cur.line);

        const step1 = wikiToImgCalls(lineText);
        const { replaced, changed } = expandLineKeepingIndent(step1);
        if (changed || step1 !== lineText) {
          editor.replaceRange(replaced, { line: cur.line, ch: 0 }, { line: cur.line, ch: lineText.length });
        }
      } catch (e) {
        console.error(e);
      }
    };

    // 붙여넣기/드롭 이벤트 훅
    this.registerEvent(this.app.workspace.on("editor-paste", (_evt, editor) => {
      setTimeout(() => afterPasteOrDrop(editor), 10);
    }));
    this.registerEvent(this.app.workspace.on("editor-drop", (_evt, editor) => {
      setTimeout(() => afterPasteOrDrop(editor), 10);
    }));

    // ───── 선택: 입력 중 자동 확장 (")" 후 Space/Enter) ─────
    this.registerDomEvent(document, "keydown", (evt) => {
      if (![" ", "Enter"].includes(evt.key)) return;
      const view = this.app.workspace.getActiveViewOfType(MarkdownView);
      if (!view) return;
      const editor = view.editor;

      try {
        const cur = editor.getCursor();
        const all = editor.getValue().split("\n");
        if (isInsideFencedCodeUntil(all, cur.line)) return;
        const lineText = editor.getLine(cur.line);
        if (!lineText.match(/img\(/) && !lineText.match(WIKI_IMG_RE)) return;

        // 위키 → img(...) → <img>
        const step1 = wikiToImgCalls(lineText);
        const { replaced, changed } = expandLineKeepingIndent(step1);
        if (changed || step1 !== lineText) {
          editor.replaceRange(replaced, { line: cur.line, ch: 0 }, { line: cur.line, ch: lineText.length });
        }
      } catch (e) {
        console.error(e);
      }
    });
  }

  onunload() {
    console.log("[obsidian-img-func] unloaded");
  }
};
