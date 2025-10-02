#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Convert one PDF from ./source → JPGs in ./../assets/img/<subdir>
Usage:
    python pdf2jpg_with_subdir.py my_ppt.pdf DBL/outputs
"""

import sys
from pathlib import Path
import fitz  # PyMuPDF
from tqdm import tqdm

# 📂 기본 경로
BASE_DIR = Path(__file__).resolve().parent
SRC_DIR = BASE_DIR / "source"
# destination base: assets/img
DEST_BASE = BASE_DIR.parent / "assets" / "posts" / "img"

# 기본값
DPI = 200
QUALITY = 90

def pdf_to_jpg(pdf_path: Path, out_dir: Path, dpi: int = DPI, quality: int = QUALITY):
    out_dir.mkdir(parents=True, exist_ok=True)
    doc = fitz.open(pdf_path)
    zoom = dpi / 72.0
    mat = fitz.Matrix(zoom, zoom)

    digits = len(str(doc.page_count))
    base = pdf_path.stem

    for pno in tqdm(range(doc.page_count), desc=pdf_path.name, unit="page"):
        page = doc.load_page(pno)
        pix = page.get_pixmap(matrix=mat, alpha=False)
        out_file = out_dir / f"{base}_{str(pno+1).zfill(digits)}.jpg"
        pix.save(out_file.as_posix(), output="jpg", jpg_quality=quality)

    doc.close()

def main():
    if len(sys.argv) < 3:
        print("Usage: python pdf2jpg_with_subdir.py <filename.pdf> <subdir>")
        sys.exit(1)

    filename = sys.argv[1]
    subdir = sys.argv[2]

    pdf_path = SRC_DIR / filename
    if not pdf_path.exists():
        print(f"File not found: {pdf_path}")
        sys.exit(1)

    out_dir = DEST_BASE / subdir
    pdf_to_jpg(pdf_path, out_dir)

if __name__ == "__main__":
    main()
