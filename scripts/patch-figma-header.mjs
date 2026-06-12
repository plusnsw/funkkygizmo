import fs from 'fs';
import path from 'path';

const docs = path.resolve('docs');

function header(base) {
  return `<header class="site-header site-header--brand site-header--figma">
<div class="container header-inner header-inner--figma">
<a class="logo" href="${base}index.html">
<img src="${base}images/logo_b.png" alt="FUNKKY GIZMO" class="brand-logo-img brand-logo-img--header"/>
</a>
<nav class="main-nav main-nav--figma" id="mainNav">
<a href="${base}index.html" data-nav="about">About</a>
<a href="${base}products/index.html" data-nav="products">Product</a>
<a href="${base}contact.html" data-nav="contact">Contact</a>
</nav>
<div class="lang-nav" aria-label="Language">
<span>KOR</span><span>|</span><span>ENG</span><span>|</span><span>CHN</span>
</div>
<button class="nav-toggle" id="navToggle" type="button" aria-label="메뉴 열기"><span></span><span></span><span></span></button>
</div>
</header>`;
}

const oldHeaderRe = /<header class="site-header site-header--brand">[\s\S]*?<\/header>/;

function patch(file, base) {
  const rel = path.relative(docs, file).replace(/\\/g, '/');
  if (rel === 'index.html' || rel === 'about.html') return;
  let html = fs.readFileSync(file, 'utf8');
  if (!oldHeaderRe.test(html)) return;
  html = html.replace(oldHeaderRe, header(base));
  html = html.replace(/class="page-brand"/, 'class="page-brand page-figma"');
  if (!html.includes('about-figma.css')) {
    html = html.replace(
      /(<link rel="stylesheet" href="[^"]*home\.css[^"]*"\/>)/,
      `$1\n<link rel="stylesheet" href="${base}css/about-figma.css?v=20260612"/>`
    );
  }
  html = html.replace(/href="[^"]*about\.html"/g, `href="${base}index.html"`);
  fs.writeFileSync(file, html);
  console.log('patched', file);
}

function walk(dir, base) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, base + '../');
    else if (name.endsWith('.html')) patch(full, base);
  }
}

walk(docs, '');
