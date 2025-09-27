function buildTree(items) {
  var root = { children: {} };
  items.forEach(function(it) {
    var node = root;
    it.path.forEach(function(seg, idx) {
      if (!node.children[seg]) node.children[seg] = { name: seg, children: {}, posts: [] };
      node = node.children[seg];
      if (idx === it.path.length - 1) {
        node.posts = node.posts.concat(it.posts || []);
        node.slug = it.slug;
      }
    });
  });
  return root;
}

function renderNode(node) {
  var ul = document.createElement('ul');
  ul.className = 'category-tree';
  Object.keys(node.children).sort().forEach(function(key) {
    var child = node.children[key];
    var li = document.createElement('li');
    li.className = 'category-item';

    var row = document.createElement('div');
    row.className = 'ct-row';

    var btn = document.createElement('button');
    btn.className = 'toggle-btn';
    btn.type = 'button';
    btn.textContent = (Object.keys(child.children).length || child.posts.length) ? '▶' : '';
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      li.classList.toggle('open');
      btn.textContent = li.classList.contains('open') ? '▼' : '▶';
    });
    row.appendChild(btn);

    var span = document.createElement('span');
    span.className = 'category-name';
    span.textContent = child.name;
    span.addEventListener('click', function() {
      li.classList.toggle('open');
      btn.textContent = li.classList.contains('open') ? '▼' : '▶';
    });
    row.appendChild(span);

    function totalPosts(n) {
      var c = (n.posts || []).length;
      Object.keys(n.children || {}).forEach(function(k) { c += totalPosts(n.children[k]); });
      return c;
    }
    var badge = document.createElement('span');
    badge.className = 'badge';
    badge.textContent = totalPosts(child);
    row.appendChild(badge);

    li.appendChild(row);

    if (Object.keys(child.children).length) {
      var childrenContainer = document.createElement('div');
      childrenContainer.className = 'children';
      childrenContainer.appendChild(renderNode(child));
      li.appendChild(childrenContainer);
    }

    if (child.posts && child.posts.length) {
      var postsDiv = document.createElement('div');
      postsDiv.className = 'posts';
      var postsUl = document.createElement('ul');
      child.posts.forEach(function(p) {
        var pli = document.createElement('li');
        var a = document.createElement('a');
        a.href = p.url;
        a.textContent = p.title;
        pli.appendChild(a);
        var t = document.createElement('time');
        t.className = 'ms-2';
        t.dateTime = p.date;
        t.textContent = ' ' + p.date;
        pli.appendChild(t);
        postsUl.appendChild(pli);
      });
      postsDiv.appendChild(postsUl);
      li.appendChild(postsDiv);
    }

    ul.appendChild(li);
  });
  return ul;
}

document.addEventListener('DOMContentLoaded', function() {
  var items = [];
  try {
    var el = document.getElementById('category-data');
    items = el ? JSON.parse(el.textContent || '[]') : [];
  } catch (e) {
    console.error('[category] JSON parse failed', e);
  }

  window.CATEGORY_ITEMS = items; // 디버깅용
  console.debug('[category] items length =', items.length);

  try {
    var root = buildTree(items);
    var container = document.getElementById('category-tree-root');
    if (!container) return;
    var tree = renderNode(root);
    container.appendChild(tree);

    var fb = document.getElementById('category-fallback');
    if (items.length > 0 && fb) fb.style.display = 'none';
  } catch (err) {
    console.error('Category tree render error:', err);
  }
});
