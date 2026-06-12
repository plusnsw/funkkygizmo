<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<%@ taglib prefix="fn" uri="jakarta.tags.functions" %>
<c:set var="pageTitle" value="Objects"/>
<c:set var="pageId" value="products"/>
<c:set var="extraCss" value="home.css"/>
<c:set var="extraScript" value="products.js"/>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<%@ include file="../common/header.jspf" %>

<section class="brand-page-hero">
    <div class="container">
        <p class="eyebrow">Portfolio · FUNKKY GIZMO</p>
        <h1 class="brand-page-title">OBJECTS</h1>
        <p class="brand-page-lead">
            브랜딩, 굿즈, 일러스트, 패키지, 콜라보, 스토어 — 펑키기즈모가 맡은 작업들입니다.
        </p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="brand-filter" id="productFilter">
            <button type="button" class="brand-filter-btn active" data-category="all">전체</button>
            <button type="button" class="brand-filter-btn" data-category="브랜딩">브랜딩</button>
            <button type="button" class="brand-filter-btn" data-category="굿즈">굿즈</button>
            <button type="button" class="brand-filter-btn" data-category="일러스트">일러스트</button>
            <button type="button" class="brand-filter-btn" data-category="패키지">패키지</button>
            <button type="button" class="brand-filter-btn" data-category="콜라보">콜라보</button>
            <button type="button" class="brand-filter-btn" data-category="스토어">스토어</button>
        </div>
        <div class="brand-objects-grid brand-objects-grid-full" id="productList">
            <c:forEach var="product" items="${products}">
                <a class="brand-object-card" href="${ctx}/products/${product.id}"
                   data-category="${product.category}" data-product-id="${product.id}">
                    <div class="brand-object-visual obj-${product.imageKey}">
                        <c:if test="${product.featured}">
                            <span class="brand-pick-label">PICK</span>
                        </c:if>
                        <span class="brand-object-label"><c:out value="${product.category}"/></span>
                    </div>
                    <div class="brand-object-body">
                        <h3><c:out value="${product.name}"/></h3>
                        <p class="brand-object-tagline"><c:out value="${product.tagline}"/></p>
                        <p class="brand-object-meta"><c:out value="${product.priceLabel}"/></p>
                    </div>
                </a>
            </c:forEach>
        </div>
        <p class="brand-filter-empty hidden" id="filterEmpty">선택한 카테고리에 해당하는 작업이 없습니다.</p>
    </div>
</section>

<%@ include file="../common/footer.jspf" %>
