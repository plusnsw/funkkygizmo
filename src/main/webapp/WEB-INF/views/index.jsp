<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<c:set var="pageTitle" value="Home"/>
<c:set var="pageId" value="home"/>
<c:set var="extraCss" value="home.css"/>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<%@ include file="common/header.jspf" %>

<section class="home-hero">
    <div class="container home-hero-inner">
        <div class="home-hero-copy">
            <h1 class="home-hero-title">WHERE ART MEETS OBJECT</h1>
            <p class="home-hero-subko">작가의 상상력을 정교한 제품으로 실체화하는 아트-프로덕션 스튜디오</p>
            <p class="home-hero-desc">
                FUNKKY GIZMO is an art-production studio. We bridge art and object,
                turning artistic imagination into tangible, refined objects through
                deep curation, craftsmanship, and technology.
            </p>
            <div class="home-hero-actions">
                <a class="btn-home btn-home-primary" href="${ctx}/products">View Works <span class="arrow" aria-hidden="true">→</span></a>
                <a class="btn-home btn-home-outline" href="${ctx}/contact">Contact Us <span class="arrow" aria-hidden="true">→</span></a>
            </div>
        </div>
        <div class="home-hero-media">
            <div class="home-hero-scene" aria-hidden="true">
                <div class="scene-surface"></div>
                <div class="shape shape-orb"></div>
                <div class="shape shape-panel"></div>
                <div class="shape shape-cube shape-cube-1"></div>
                <div class="shape shape-cube shape-cube-2"></div>
                <div class="shape shape-fabric"></div>
                <div class="shape shape-rug"></div>
                <div class="shape shape-plinth"></div>
            </div>
            <div class="home-hero-seal" aria-hidden="true">
                <div class="home-hero-seal-ring">
                    <span class="seal-text seal-text-top">WHERE ART MEETS OBJECT</span>
                    <div class="home-hero-seal-icon">
                        <c:set var="logoFile" value="logo_a.png"/>
                        <c:set var="logoClass" value="brand-logo-img--seal"/>
                        <%@ include file="common/brand-logo.jspf" %>
                    </div>
                    <span class="seal-text seal-text-bottom">FUNKKY GIZMO</span>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="home-services" id="services">
    <div class="container">
        <div class="home-services-grid">
            <article class="home-service-card">
                <div class="home-service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="20" height="20"><circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" stroke-width="2"/><path d="M15 15l5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
                </div>
                <div class="home-service-body">
                    <h3>DEEP CURATION</h3>
                    <p>작가의 세계관과 철학을 깊이 이해하고, 그것이 제품에 담기도록 큐레이션합니다.</p>
                </div>
            </article>
            <article class="home-service-card">
                <div class="home-service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 12h8M6 8h12M7 16h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="4" y="5" width="16" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/></svg>
                </div>
                <div class="home-service-body">
                    <h3>MATERIAL &amp; CRAFTSMANSHIP</h3>
                    <p>최적의 소재와 정교한 제작 기법을 결합하여, 감각적이고 내구성 있는 오브제를 만듭니다.</p>
                </div>
            </article>
            <article class="home-service-card">
                <div class="home-service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="20" height="20"><rect x="5" y="5" width="14" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 12h6M12 9v6" stroke="currentColor" stroke-width="2"/></svg>
                </div>
                <div class="home-service-body">
                    <h3>TECHNOLOGY INTEGRATION</h3>
                    <p>아날로그 감성에 디지털 기술을 접목하여, 새로운 경험을 제공하는 제품을 개발합니다.</p>
                </div>
            </article>
            <article class="home-service-card">
                <div class="home-service-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="20" height="20"><circle cx="8" cy="10" r="3" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="16" cy="10" r="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 18c2-2 4-3 8-3s6 1 8 3" stroke="currentColor" stroke-width="2" fill="none"/></svg>
                </div>
                <div class="home-service-body">
                    <h3>ARTIST PARTNERSHIP</h3>
                    <p>재능 있는 작가들과 협력하여, 그들의 창작 활동을 지원하고 세계에 알립니다.</p>
                </div>
            </article>
        </div>
    </div>
</section>

<section class="home-objects" id="objects">
    <div class="container">
        <div class="home-objects-intro">
            <h2 class="home-objects-title">FEATURED OBJECTS</h2>
            <p class="home-objects-sub">예술을 일상으로, 오브제를 경험으로.</p>
            <a class="home-objects-link" href="${ctx}/products">Explore All Objects <span class="arrow" aria-hidden="true">→</span></a>
        </div>
        <div class="home-objects-grid">
            <c:forEach var="product" items="${objectItems}">
                <a class="home-object-card" href="${ctx}/products/${product.id}">
                    <div class="home-object-visual obj-${product.imageKey}">
                        <span class="home-object-label">
                            <c:choose>
                                <c:when test="${product.id == 1}">FABRIC &amp; TEXTILE</c:when>
                                <c:when test="${product.id == 2}">RUG &amp; FABRIC OBJECTS</c:when>
                                <c:when test="${product.id == 3}">LIGHT &amp; ART PANEL</c:when>
                                <c:when test="${product.id == 4}">DESK OBJECTS</c:when>
                                <c:when test="${product.id == 5}">ACRYLIC &amp; TECH OBJECTS</c:when>
                                <c:otherwise>LIMITED EDITION</c:otherwise>
                            </c:choose>
                        </span>
                    </div>
                </a>
            </c:forEach>
        </div>
    </div>
</section>

<%@ include file="common/footer.jspf" %>
