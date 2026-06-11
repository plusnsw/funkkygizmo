#!/usr/bin/env python3
"""Generate docs/ folder for GitHub Pages from project data."""
from __future__ import annotations

import json
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
STATIC_SRC = ROOT / "src" / "main" / "resources" / "static"

PRODUCTS = [
    {
        "id": 1,
        "name": "비트로스트 카페 브랜딩",
        "tagline": "따뜻한 커피 문화를 담은 로고·패키지·간판 시스템",
        "description": "로고 타입, 컬러 가이드, 메뉴판·컵·에코백까지 일관된 비주얼로 동네 카페의 개성을 살렸습니다. 포스터와 SNS 템플릿도 함께 제작했습니다.",
        "category": "브랜딩",
        "priceLabel": "2025 · 브랜딩",
        "imageKey": "branding",
        "featured": True,
        "homeLabel": "FABRIC &amp; TEXTILE",
    },
    {
        "id": 2,
        "name": "몽글몽글 캐릭터 굿즈",
        "tagline": "말랑한 캐릭터 IP 기반 스티커·키링·파우치 라인",
        "description": "캐릭터 시트부터 굿즈 목업, 실제 제작용 일러스트·패키지까지 담당했습니다. 팝업 부스와 온라인 스토어용 상세 페이지도 제작했습니다.",
        "category": "굿즈",
        "priceLabel": "2025 · 굿즈",
        "imageKey": "goods",
        "featured": True,
        "homeLabel": "RUG &amp; FABRIC OBJECTS",
    },
    {
        "id": 3,
        "name": "네온 드림 포스터 시리즈",
        "tagline": "레트로·네온 감성 일러스트 포스터 6종",
        "description": "펑키한 컬러와 타이포가 돋보이는 한정판 포스터 시리즈입니다. 실크 스크린 인쇄용 색상 분리 파일과 전시용 목업을 제공했습니다.",
        "category": "일러스트",
        "priceLabel": "2024 · 일러스트",
        "imageKey": "illustration",
        "featured": True,
        "homeLabel": "LIGHT &amp; ART PANEL",
    },
    {
        "id": 4,
        "name": "팝업 스토어 키트",
        "tagline": "부스·배너·진열·포토존 통합 패키지 디자인",
        "description": "3일짜리 팝업을 위한 공간 그래픽, 안내 사인, 포토월, 굿즈 진열대 시안을 한 세트로 설계했습니다. 현장 시공팀과 협업해 컬러 매칭까지 맞췄습니다.",
        "category": "패키지",
        "priceLabel": "2024 · 패키지",
        "imageKey": "package",
        "featured": False,
        "homeLabel": "DESK OBJECTS",
    },
    {
        "id": 5,
        "name": "아티스트 콜라보 머그",
        "tagline": "로컬 일러스트레이터 × 펑키 기즈모 한정 머그",
        "description": "일러스트 3종을 선별해 머그·박스·스티커 세트로 구성했습니다. 콜라보 로고와 번들 패키지, 판매용 썸네일 템플릿까지 제작했습니다.",
        "category": "콜라보",
        "priceLabel": "2024 · 콜라보",
        "imageKey": "collab",
        "featured": False,
        "homeLabel": "ACRYLIC &amp; TECH OBJECTS",
    },
    {
        "id": 6,
        "name": "온라인 굿즈 스토어 론칭",
        "tagline": "브랜드 숍 UI·상세·배너 키비주얼",
        "description": "자사 굿즈를 판매하는 온라인 스토어의 메인 비주얼, 카테고리 배너, 상품 상세 레이아웃 가이드를 디자인했습니다. 모바일 퍼스트로 구성했습니다.",
        "category": "스토어",
        "priceLabel": "2023 · 스토어",
        "imageKey": "store",
        "featured": False,
        "homeLabel": "LIMITED EDITION",
    },
]

TEAM = [
    ("Dr. MAX", ["Ph. D. In HCI Design", "Creative Director", "Experience Design Expert", "Industrial Designer"], "avatar-hoodie"),
    ("Noah", ["Design Director", "Industrial Designer"], "avatar-apron"),
    ("MARI", ["Strategy Director", "Business Manager"], "avatar-coat"),
    ("Fong", ["Engineer", "Structural Development"], "avatar-work"),
    ("Gao", ["Electronic Engineer", "Hardware Manager"], "avatar-casual"),
    ("Moon", ["Digital Designer", "3D Designer", "Motion Director"], "avatar-vest"),
]


def head(title: str, page_id: str, base: str, extra_css: str = "home.css", extra_script: str = "") -> str:
    team_css = f'<link rel="stylesheet" href="{base}css/team.css?v=20260528"/>\n' if extra_css == "team.css" else ""
    home_css = f'<link rel="stylesheet" href="{base}css/home.css?v=20260528"/>\n' if extra_css == "home.css" else ""
    gp_css = f'<link rel="stylesheet" href="{base}css/github-pages.css?v=20260528"/>\n'
    script = f'<script src="{base}js/{extra_script}"></script>\n' if extra_script else ""
    return f"""<!DOCTYPE html>
<html lang="ko" class="page-brand">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>{title} | FUNKKY GIZMO</title>
  <link rel="icon" href="{base}images/logo_a.png" type="image/png"/>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="{base}css/style.css?v=20260528"/>
  {home_css}{team_css}{gp_css}</head>
<body data-page="{page_id}" class="page-brand page-{page_id}">
<header class="site-header site-header--brand">
  <div class="container header-inner">
    <a class="logo" href="{base}index.html">
      <img src="{base}images/logo_b.png" alt="FUNKKY GIZMO" class="brand-logo-img brand-logo-img--header"/>
    </a>
    <nav class="main-nav" id="mainNav">
      <a href="{base}about.html" data-nav="about">About</a>
      <a href="{base}products/index.html" data-nav="products">Objects</a>
      <a href="{base}team.html" data-nav="team">Team</a>
      <a href="{base}contact.html" data-nav="contact">Contact</a>
    </nav>
    <a class="nav-brand-badge" href="{base}index.html" aria-label="FUNKKY GIZMO">
      <img src="{base}images/logo_a.png" alt="" class="brand-logo-img brand-logo-img--nav"/>
    </a>
    <button class="nav-toggle" id="navToggle" type="button" aria-label="메뉴 열기"><span></span><span></span><span></span></button>
  </div>
</header>
<main class="main-brand main-{page_id}">
"""


def footer(base: str, extra_script: str = "", show_site_footer: bool = True, include_config: bool = False) -> str:
    site_footer = ""
    if show_site_footer:
        site_footer = f"""
<footer class="site-footer">
  <div class="container footer-grid">
    <div>
      <a class="logo footer-logo" href="{base}index.html">
        <img src="{base}images/logo_a.png" alt="" class="brand-logo-img brand-logo-img--mark"/>
        <span class="logo-text"><span class="logo-en">FUNKKY GIZMO</span><span class="logo-ko">펑키기즈모</span></span>
      </a>
      <p class="footer-tagline">THE BRIDGE BETWEEN ART AND OBJECT</p>
      <p class="footer-desc">ART &amp; PRODUCT · CREATIVE PARTNER<br/>디자인과 굿즈를 잇는 크리에이티브 스튜디오</p>
    </div>
    <div>
      <h4>포트폴리오</h4>
      <ul>
        <li><a href="{base}products/index.html">전체 작업</a></li>
        <li><a href="{base}products/1.html">비트로스트 브랜딩</a></li>
        <li><a href="{base}products/2.html">몽글몽글 굿즈</a></li>
      </ul>
    </div>
    <div>
      <h4>스튜디오</h4>
      <ul>
        <li><a href="{base}about.html">소개</a></li>
        <li><a href="{base}contact.html">작업 문의</a></li>
      </ul>
    </div>
    <div>
      <h4>Locations</h4>
      <ul class="footer-locations">
        <li><span class="loc-dot"></span> SEOUL</li>
        <li><span class="loc-dot"></span> HANG ZHOU</li>
        <li><span class="loc-dot"></span> FO SHAN</li>
      </ul>
      <ul class="footer-contact"><li>funkkygizmo.mari@gmail.com</li></ul>
    </div>
  </div>
  <div class="container footer-bottom"><p>&copy; 2026 FUNKKY GIZMO (펑키기즈모). All rights reserved.</p></div>
</footer>"""
    script_tags = ""
    if include_config:
        script_tags += f'<script src="{base}js/config.js"></script>\n'
    script_tags += f'<script src="{base}js/main.js"></script>\n'
    if extra_script:
        script_tags += f'<script src="{base}js/{extra_script}"></script>\n'
    if extra_script == "" and "contact" in base:
        pass
    return f"""</main>{site_footer}
{script_tags}</body></html>
"""


def build():
    if DOCS.exists():
        shutil.rmtree(DOCS)
    DOCS.mkdir()
    for sub in ("css", "js", "images", "products"):
        (DOCS / sub).mkdir(parents=True, exist_ok=True)

    shutil.copytree(STATIC_SRC / "css", DOCS / "css", dirs_exist_ok=True)
    shutil.copytree(STATIC_SRC / "images", DOCS / "images", dirs_exist_ok=True)
    for js in ("main.js", "products.js"):
        shutil.copy2(STATIC_SRC / "js" / js, DOCS / "js" / js)

    (DOCS / "js" / "config.js").write_text(
        """// Google Form URL — 구글 폼 '보내기' 링크로 교체하세요
window.SITE_CONFIG = {
  googleFormUrl: 'https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/viewform',
  googleFormEmbedUrl: 'https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_FORM_ID/viewform?embedded=true'
};
""",
        encoding="utf-8",
    )
    shutil.copy2(ROOT / "scripts" / "contact-static.js", DOCS / "js" / "contact-static.js")

    base = ""
    # index
    objects_html = "".join(
        f"""<a class="home-object-card" href="products/{p['id']}.html">
          <div class="home-object-visual obj-{p['imageKey']}"><span class="home-object-label">{p['homeLabel']}</span></div></a>"""
        for p in PRODUCTS
    )
    (DOCS / "index.html").write_text(
        head("Home", "home", base)
        + """
<section class="home-hero"><div class="container home-hero-inner">
<div class="home-hero-copy">
<h1 class="home-hero-title">WHERE ART MEETS OBJECT</h1>
<p class="home-hero-subko">작가의 상상력을 정교한 제품으로 실체화하는 아트-프로덕션 스튜디오</p>
<p class="home-hero-desc">FUNKKY GIZMO is an art-production studio. We bridge art and object, turning artistic imagination into tangible, refined objects through deep curation, craftsmanship, and technology.</p>
<div class="home-hero-actions">
<a class="btn-home btn-home-primary" href="products/index.html">View Works <span class="arrow" aria-hidden="true">→</span></a>
<a class="btn-home btn-home-outline" href="contact.html">Contact Us <span class="arrow" aria-hidden="true">→</span></a>
</div></div>
<div class="home-hero-media"><div class="home-hero-scene" aria-hidden="true">
<div class="scene-surface"></div><div class="shape shape-orb"></div><div class="shape shape-panel"></div>
<div class="shape shape-cube shape-cube-1"></div><div class="shape shape-cube shape-cube-2"></div>
<div class="shape shape-fabric"></div><div class="shape shape-rug"></div><div class="shape shape-plinth"></div>
</div><div class="home-hero-seal" aria-hidden="true"><div class="home-hero-seal-ring">
<span class="seal-text seal-text-top">WHERE ART MEETS OBJECT</span>
<div class="home-hero-seal-icon"><img src="images/logo_a.png" alt="" class="brand-logo-img brand-logo-img--seal"/></div>
<span class="seal-text seal-text-bottom">FUNKKY GIZMO</span></div></div></div></div></section>
<section class="home-services" id="services"><div class="container"><div class="home-services-grid">
<article class="home-service-card"><div class="home-service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20"><circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15 15l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></div><div class="home-service-body"><h3>DEEP CURATION</h3><p>작가의 세계관과 철학을 깊이 이해하고, 그것이 제품에 담기도록 큐레이션합니다.</p></div></article>
<article class="home-service-card"><div class="home-service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 12h8M6 8h12M7 16h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="4" y="5" width="16" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/></svg></div><div class="home-service-body"><h3>MATERIAL &amp; CRAFTSMANSHIP</h3><p>최적의 소재와 정교한 제작 기법을 결합하여, 감각적이고 내구성 있는 오브제를 만듭니다.</p></div></article>
<article class="home-service-card"><div class="home-service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20"><rect x="5" y="5" width="14" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 12h6M12 9v6" stroke="currentColor" stroke-width="2"/></svg></div><div class="home-service-body"><h3>TECHNOLOGY INTEGRATION</h3><p>아날로그 감성에 디지털 기술을 접목하여, 새로운 경험을 제공하는 제품을 개발합니다.</p></div></article>
<article class="home-service-card"><div class="home-service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20"><circle cx="8" cy="10" r="3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="16" cy="10" r="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 18c2-2 4-3 8-3s6 1 8 3" stroke="currentColor" stroke-width="2" fill="none"/></svg></div><div class="home-service-body"><h3>ARTIST PARTNERSHIP</h3><p>재능 있는 작가들과 협력하여, 그들의 창작 활동을 지원하고 세계에 알립니다.</p></div></article>
</div></div></section>
<section class="home-objects" id="objects"><div class="container">
<div class="home-objects-intro"><h2 class="home-objects-title">FEATURED OBJECTS</h2>
<p class="home-objects-sub">예술을 일상으로, 오브제를 경험으로.</p>
<a class="home-objects-link" href="products/index.html">Explore All Objects <span class="arrow" aria-hidden="true">→</span></a></div>
<div class="home-objects-grid">"""
        + objects_html
        + "</div></div></section>"
        + footer(base),
        encoding="utf-8",
    )

    # about
    (DOCS / "about.html").write_text(
        head("About", "about", base)
        + """<section class="brand-page-hero"><div class="container">
<p class="eyebrow">About FUNKKY GIZMO</p><h1 class="brand-page-title">펑키기즈모</h1>
<p class="brand-page-tagline">THE BRIDGE BETWEEN ART AND OBJECT</p>
<p class="brand-page-lead">디자인(아트)과 굿즈(오브제)를 잇는 크리에이티브 파트너입니다. ART &amp; PRODUCT를 모토로, 브랜드와 팬 모두에게 남는 작업을 합니다.</p>
</div></section><section class="section"><div class="container"><div class="feature-grid">
<article class="feature-card"><h3>무엇을 하나요</h3><p>로고·브랜딩, 일러스트, 포스터, 패키지 디자인부터 스티커·키링·머그 등 굿즈 기획·디자인, 팝업·온라인 스토어 비주얼까지 한곳에서 진행합니다.</p></article>
<article class="feature-card"><h3>작업 방식</h3><p>짧은 미팅으로 무드와 예산을 맞춘 뒤, 시안 2~3안을 제안합니다. 수정 라운드를 거쳐 인쇄·제작 가능한 최종 파일을 전달합니다.</p></article>
<article class="feature-card"><h3>톤 &amp; 무드</h3><ul class="brand-about-list">
<li><strong>펑키</strong> — 과하지 않은 장난스러움</li><li><strong>따뜻함</strong> — 손에 닿는 질감의 비주얼</li><li><strong>연결</strong> — 아트와 오브제를 잇는 파트너</li></ul></article>
</div></div></section><section class="section section-alt"><div class="container">
<div class="section-header"><p class="eyebrow">Locations</p><h2>거점 · 연혁</h2><p class="brand-page-sub">SEOUL · HANG ZHOU · FO SHAN</p></div>
<div class="brand-timeline">
<div class="brand-timeline-item"><span class="brand-timeline-year">2018</span><p>서울 스튜디오 개설, 일러스트·스티커 굿즈 판매 시작</p></div>
<div class="brand-timeline-item"><span class="brand-timeline-year">2020</span><p>「펑키기즈모」 브랜드 정식 런칭, 자사 굿즈 라인 확대</p></div>
<div class="brand-timeline-item"><span class="brand-timeline-year">2023</span><p>항저우·포산 제작·협업 거점 연계, 브랜딩 의뢰 증가</p></div>
<div class="brand-timeline-item"><span class="brand-timeline-year">2025</span><p>캐릭터 IP 「몽글몽글」 시리즈, 온라인 스토어 리뉴얼</p></div>
</div></div></section>"""
        + footer(base),
        encoding="utf-8",
    )

    # contact
    (DOCS / "contact.html").write_text(
        head("Contact", "contact", base)
        + """
<section class="brand-page-hero"><div class="container">
<p class="eyebrow">Contact</p><h1 class="brand-page-title">CONTACT US</h1>
<p class="brand-page-lead">브랜딩, 굿즈, 일러스트, 팝업 등 프로젝트 내용을 아래 Google Form으로 보내 주시면 영업일 기준 1~2일 내 회신드립니다.</p>
</div></section>
<section class="section"><div class="container brand-contact-layout">
<div class="brand-contact-form brand-contact-google">
<p class="brand-form-note" id="formSetupNote">※ <code>docs/js/config.js</code>에 구글 폼 URL을 넣으면 아래에 폼이 표시됩니다.</p>
<div class="brand-google-form-actions">
<a class="btn-home btn-home-primary" id="googleFormLink" href="#" target="_blank" rel="noopener">Google Form으로 문의하기 <span class="arrow">→</span></a>
</div>
<iframe id="googleFormEmbed" class="brand-google-form-embed hidden" title="문의 양식" loading="lazy"></iframe>
</div>
<aside class="brand-contact-aside">
<h3 class="brand-aside-title">CONNECT</h3><p class="brand-aside-label">INSTAGRAM @</p><p class="brand-aside-instagram">funkkygizmo</p>
<h3 class="brand-aside-title">STUDIOS</h3>
<ul class="brand-aside-locations">
<li><strong>SOUTH KOREA</strong><span>Seoul</span></li>
<li><strong>CHINA</strong><span>Hangzhou · Foshan</span></li></ul>
<p class="brand-aside-email">funkkygizmo.mari@gmail.com</p>
<p class="brand-aside-hours">평일 10:00 – 19:00 (KST)</p>
</aside></div></section>"""
        + footer(base, "contact-static.js", include_config=True),
        encoding="utf-8",
    )

    # products list
    cards = ""
    for p in PRODUCTS:
        pick = '<span class="brand-pick-label">PICK</span>' if p["featured"] else ""
        cards += f"""<a class="brand-object-card" href="{p['id']}.html" data-category="{p['category']}">
<div class="brand-object-visual obj-{p['imageKey']}">{pick}<span class="brand-object-label">{p['category']}</span></div>
<div class="brand-object-body"><h3>{p['name']}</h3><p class="brand-object-tagline">{p['tagline']}</p>
<p class="brand-object-meta">{p['priceLabel']}</p></div></a>"""
    pbase = "../"
    (DOCS / "products" / "index.html").write_text(
        head("Objects", "products", pbase)
        + """<section class="brand-page-hero"><div class="container">
<p class="eyebrow">Portfolio · FUNKKY GIZMO</p><h1 class="brand-page-title">OBJECTS</h1>
<p class="brand-page-lead">브랜딩, 굿즈, 일러스트, 패키지, 콜라보, 스토어 — 펑키기즈모가 맡은 작업들입니다.</p>
</div></section><section class="section"><div class="container">
<div class="brand-filter" id="productFilter">
<button type="button" class="brand-filter-btn active" data-category="all">전체</button>
<button type="button" class="brand-filter-btn" data-category="브랜딩">브랜딩</button>
<button type="button" class="brand-filter-btn" data-category="굿즈">굿즈</button>
<button type="button" class="brand-filter-btn" data-category="일러스트">일러스트</button>
<button type="button" class="brand-filter-btn" data-category="패키지">패키지</button>
<button type="button" class="brand-filter-btn" data-category="콜라보">콜라보</button>
<button type="button" class="brand-filter-btn" data-category="스토어">스토어</button>
</div><div class="brand-objects-grid brand-objects-grid-full" id="productList">"""
        + cards
        + """</div><p class="brand-filter-empty hidden" id="filterEmpty">선택한 카테고리에 해당하는 작업이 없습니다.</p>
</div></section>"""
        + footer(pbase, "products.js"),
        encoding="utf-8",
    )

    for p in PRODUCTS:
        (DOCS / "products" / f"{p['id']}.html").write_text(
            head(p["name"], "product-detail", pbase)
            + f"""<section class="brand-page-hero brand-page-hero-compact"><div class="container">
<a class="brand-breadcrumb" href="index.html">← Objects</a>
<p class="eyebrow">{p['category']}</p><h1 class="brand-page-title">{p['name']}</h1>
<p class="brand-page-lead">{p['tagline']}</p></div></section>
<section class="section"><div class="container brand-detail-layout">
<div class="brand-detail-visual obj-{p['imageKey']}"></div><div class="brand-detail-content">
<h2 class="brand-detail-heading">프로젝트 소개</h2><p class="brand-detail-text">{p['description']}</p>
<div class="brand-detail-block"><h3>작업 범위</h3><ul class="brand-about-list">
<li>컨셉·무드보드 및 시안 제안</li><li>최종 아트워크·인쇄·제작용 파일 전달</li>
<li>굿즈 목업 및 패키지 시안</li><li>SNS·스토어용 홍보 비주얼 (선택)</li></ul></div>
<div class="brand-detail-meta"><span class="brand-detail-meta-label">프로젝트</span>
<span class="brand-detail-meta-value">{p['priceLabel']}</span></div>
<div class="brand-detail-actions">
<a class="btn-home btn-home-primary" href="../contact.html">비슷한 작업 문의 <span class="arrow">→</span></a>
<a class="btn-home btn-home-outline" href="index.html">다른 작업 보기 <span class="arrow">→</span></a>
</div></div></div></section>"""
            + footer(pbase),
            encoding="utf-8",
        )

    # team
    team_cards = ""
    for name, roles, avatar in TEAM:
        roles_li = "".join(f"<li>{r}</li>" for r in roles)
        team_cards += f"""<article class="team-card"><span class="team-card-badge" aria-hidden="true">
<svg viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="10" fill="#0a2dff"/><circle cx="12" cy="12" r="4" fill="#fff"/></svg></span>
<div class="team-card-inner"><div class="team-avatar {avatar}" aria-hidden="true"><div class="avatar-face">
<span class="avatar-eye"></span><span class="avatar-eye"></span><span class="avatar-mouth"></span></div></div>
<div class="team-card-info"><h2 class="team-member-name">{name}</h2><ul class="team-member-roles">{roles_li}</ul></div></div></article>"""

    (DOCS / "team.html").write_text(
        head("Team", "team", base, extra_css="team.css")
        + f"""<div class="team-page"><div class="team-layout"><div class="team-main">
<header class="team-hero"><div class="team-hero-top"><div class="team-hero-copy">
<h1 class="team-title">GLOBAL TEAM</h1>
<p class="team-intro">우리는 사람과 예술, 사물을 연결하며 전 세계에 즐거움과 영감을 전합니다.</p>
<p class="team-keywords">CONNECT · INSPIRE · CREATE
<span class="team-keywords-icon" aria-hidden="true"><img src="images/logo_a.png" alt="" class="brand-logo-img brand-logo-img--keywords"/></span></p>
</div><div class="team-map" aria-hidden="true"><div class="team-map-dots"></div>
<div class="map-pin map-pin-kr"><span class="map-pin-dot"></span><span class="map-pin-label"><strong>SOUTH KOREA</strong><br/>(Seoul)</span></div>
<div class="map-pin map-pin-cn"><span class="map-pin-dot"></span><span class="map-pin-label"><strong>CHINA</strong><br/>(Hangzhou / Foshan)</span></div>
</div></div></header>
<section class="team-grid-section"><div class="team-grid">{team_cards}</div></section></div>
<aside class="team-sidebar">
<section class="sidebar-block"><h3 class="sidebar-title">STUDIOS</h3><ul class="studio-list">
<li><span class="studio-icon studio-icon-seoul" aria-hidden="true"></span><div><strong>SOUTH KOREA</strong><span>Seoul</span></div></li>
<li><span class="studio-icon studio-icon-china" aria-hidden="true"></span><div><strong>CHINA</strong><span>Hangzhou · Foshan</span></div></li></ul></section>
<section class="sidebar-block"><h3 class="sidebar-title">CONNECT</h3><p class="sidebar-label">INSTAGRAM @</p>
<a class="instagram-link" href="https://instagram.com/funkkygizmo" target="_blank" rel="noopener">funkkygizmo</a></section>
<a class="btn-team-contact" href="contact.html">CONTACT US <span aria-hidden="true">→</span></a></aside></div>
<footer class="team-page-footer"><div class="team-footer-inner">
<div class="team-footer-logo" aria-hidden="true"><img src="images/logo_a.png" alt="" class="brand-logo-img brand-logo-img--footer"/></div>
<div class="team-footer-cols"><div><strong>CONNECT</strong><span>연결하고</span></div>
<div><strong>INSPIRE</strong><span>영감을 주고</span></div><div><strong>CREATE</strong><span>함께 만듭니다</span></div></div>
<p class="team-footer-copy">© FUNKKY GIZMO</p></div></footer></div>"""
        + footer(base, show_site_footer=False),
        encoding="utf-8",
    )

    # CSS for google form embed
    extra_css = DOCS / "css" / "github-pages.css"
    extra_css.write_text(
        """.brand-google-form-embed { width: 100%; min-height: 720px; border: 0; border-radius: 12px; margin-top: 1rem; }
.brand-google-form-embed.hidden, .brand-google-form-actions.hidden { display: none; }
.brand-contact-google .brand-google-form-actions { margin-top: 0.5rem; }
""",
        encoding="utf-8",
    )

    # inject github-pages.css in all pages - append link via small patch to index only... add to build head() 
    print(f"Built static site in {DOCS}")


if __name__ == "__main__":
    build()
