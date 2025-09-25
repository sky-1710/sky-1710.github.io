---
layout: page
title: Categories
icon: fas fa-stream
order: 1
---


<style>
.cat-tree{list-style:none;margin:0;padding:0}
.cat-panel{border:1px solid #e5e5e5;border-radius:.6rem;overflow:hidden;background:#fff}
.cat-header{display:flex;align-items:center;gap:.6rem;padding:.6rem .9rem;background:#f7f7f7;cursor:pointer;list-style:none;font-weight:600}
.cat-stats{margin-left:auto;opacity:.65;font-weight:500}
.cat-caret{margin-left:.4rem;opacity:.65;transition:transform .15s ease}
.cat-panel[open] .cat-caret{transform:rotate(180deg)}
.cat-children{padding:.2rem .2rem .6rem .2rem}
.cat-posts{list-style:none;margin:0;padding:.4rem .9rem .8rem 1.4rem}
.cat-post{margin:.25rem 0}
.cat-post .post-meta{margin-left:.35rem;opacity:.65;font-size:.95em}
</style>



{% include category_tree.html posts=site.posts level=0 %}
