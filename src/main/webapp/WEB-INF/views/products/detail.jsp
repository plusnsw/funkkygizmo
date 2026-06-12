<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<c:set var="pageTitle" value="${product.name}"/>
<c:set var="pageId" value="product-detail"/>
<c:set var="extraCss" value="home.css"/>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<%@ include file="../common/header.jspf" %>

<section class="brand-page-hero brand-page-hero-compact">
    <div class="container">
        <a class="brand-breadcrumb" href="${ctx}/products">← Objects</a>
        <p class="eyebrow"><c:out value="${product.category}"/></p>
        <h1 class="brand-page-title"><c:out value="${product.name}"/></h1>
        <p class="brand-page-lead"><c:out value="${product.tagline}"/></p>
    </div>
</section>

<section class="section">
    <div class="container brand-detail-layout">
        <div class="brand-detail-visual obj-${product.imageKey}"></div>
        <div class="brand-detail-content">
            <h2 class="brand-detail-heading">프로젝트 소개</h2>
            <p class="brand-detail-text"><c:out value="${product.description}"/></p>

            <div class="brand-detail-block">
                <h3>작업 범위</h3>
                <ul class="brand-about-list">
                    <li>컨셉·무드보드 및 시안 제안</li>
                    <li>최종 아트워크·인쇄·제작용 파일 전달</li>
                    <li>굿즈 목업 및 패키지 시안</li>
                    <li>SNS·스토어용 홍보 비주얼 (선택)</li>
                </ul>
            </div>

            <div class="brand-detail-meta">
                <span class="brand-detail-meta-label">프로젝트</span>
                <span class="brand-detail-meta-value"><c:out value="${product.priceLabel}"/></span>
            </div>

            <div class="brand-detail-actions">
                <a class="btn-home btn-home-primary" href="${ctx}/contact">비슷한 작업 문의 <span class="arrow">→</span></a>
                <a class="btn-home btn-home-outline" href="${ctx}/products">다른 작업 보기 <span class="arrow">→</span></a>
            </div>
        </div>
    </div>
</section>

<%@ include file="../common/footer.jspf" %>
