<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<c:set var="pageTitle" value="About"/>
<c:set var="pageId" value="about"/>
<c:set var="extraCss" value="home.css"/>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<%@ include file="common/header.jspf" %>

<section class="brand-page-hero">
    <div class="container">
        <p class="eyebrow">About FUNKKY GIZMO</p>
        <h1 class="brand-page-title">펑키기즈모</h1>
        <p class="brand-page-tagline">THE BRIDGE BETWEEN ART AND OBJECT</p>
        <p class="brand-page-lead">
            디자인(아트)과 굿즈(오브제)를 잇는 크리에이티브 파트너입니다.
            ART &amp; PRODUCT를 모토로, 브랜드와 팬 모두에게 남는 작업을 합니다.
        </p>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="feature-grid">
            <article class="feature-card">
                <h3>무엇을 하나요</h3>
                <p>
                    로고·브랜딩, 일러스트, 포스터, 패키지 디자인부터
                    스티커·키링·머그 등 굿즈 기획·디자인, 팝업·온라인 스토어 비주얼까지
                    한곳에서 진행합니다.
                </p>
            </article>
            <article class="feature-card">
                <h3>작업 방식</h3>
                <p>
                    짧은 미팅으로 무드와 예산을 맞춘 뒤, 시안 2~3안을 제안합니다.
                    수정 라운드를 거쳐 인쇄·제작 가능한 최종 파일을 전달합니다.
                </p>
            </article>
            <article class="feature-card">
                <h3>톤 &amp; 무드</h3>
                <ul class="brand-about-list">
                    <li><strong>펑키</strong> — 과하지 않은 장난스러움</li>
                    <li><strong>따뜻함</strong> — 손에 닿는 질감의 비주얼</li>
                    <li><strong>연결</strong> — 아트와 오브제를 잇는 파트너</li>
                </ul>
            </article>
        </div>
    </div>
</section>

<section class="section section-alt">
    <div class="container">
        <div class="section-header">
            <p class="eyebrow">Locations</p>
            <h2>거점 · 연혁</h2>
            <p class="brand-page-sub">SEOUL · HANG ZHOU · FO SHAN</p>
        </div>
        <div class="brand-timeline">
            <div class="brand-timeline-item">
                <span class="brand-timeline-year">2018</span>
                <p>서울 스튜디오 개설, 일러스트·스티커 굿즈 판매 시작</p>
            </div>
            <div class="brand-timeline-item">
                <span class="brand-timeline-year">2020</span>
                <p>「펑키기즈모」 브랜드 정식 런칭, 자사 굿즈 라인 확대</p>
            </div>
            <div class="brand-timeline-item">
                <span class="brand-timeline-year">2023</span>
                <p>항저우·포산 제작·협업 거점 연계, 브랜딩 의뢰 증가</p>
            </div>
            <div class="brand-timeline-item">
                <span class="brand-timeline-year">2025</span>
                <p>캐릭터 IP 「몽글몽글」 시리즈, 온라인 스토어 리뉴얼</p>
            </div>
        </div>
    </div>
</section>

<%@ include file="common/footer.jspf" %>
