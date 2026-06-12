<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<c:set var="pageTitle" value="Contact"/>
<c:set var="pageId" value="contact"/>
<c:set var="extraCss" value="home.css"/>
<c:set var="extraScript" value="contact.js"/>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<%@ include file="common/header.jspf" %>

<section class="brand-page-hero">
    <div class="container">
        <p class="eyebrow">Contact</p>
        <h1 class="brand-page-title">CONTACT US</h1>
        <p class="brand-page-lead">
            브랜딩, 굿즈, 일러스트, 팝업 등 프로젝트 내용을 남겨 주시면
            영업일 기준 1~2일 내 회신드립니다.
        </p>
    </div>
</section>

<section class="section">
    <div class="container brand-contact-layout">
        <form class="brand-contact-form" id="contactForm" action="#" method="post">
            <div class="brand-form-row">
                <label for="name">이름 *</label>
                <input type="text" id="name" name="name" placeholder="홍길동" required/>
            </div>
            <div class="brand-form-row">
                <label for="email">이메일 *</label>
                <input type="email" id="email" name="email" placeholder="you@brand.com" required/>
            </div>
            <div class="brand-form-row">
                <label for="company">브랜드 / 팀명</label>
                <input type="text" id="company" name="company" placeholder="(주)예시, 개인 작가명 등"/>
            </div>
            <div class="brand-form-row">
                <label for="inquiryType">문의 유형</label>
                <select id="inquiryType" name="inquiryType">
                    <option value="branding">브랜딩·로고</option>
                    <option value="goods">굿즈·패키지</option>
                    <option value="illustration">일러스트·포스터</option>
                    <option value="popup">팝업·전시</option>
                    <option value="collab">콜라보</option>
                    <option value="other">기타</option>
                </select>
            </div>
            <div class="brand-form-row">
                <label for="message">프로젝트 설명 *</label>
                <textarea id="message" name="message" rows="5" placeholder="예: 키링 3종, 수량 500, 희망 일정 6월" required></textarea>
            </div>
            <p class="brand-form-note">※ 제출 시 스튜디오 메일로 전송됩니다. (SMTP 미설정 시 기본 메일 앱이 열립니다)</p>
            <button type="submit" class="btn-home btn-home-primary" id="contactSubmit">문의 보내기 <span class="arrow">→</span></button>
        </form>

        <aside class="brand-contact-aside">
            <h3 class="brand-aside-title">CONNECT</h3>
            <p class="brand-aside-label">INSTAGRAM @</p>
            <p class="brand-aside-instagram">funkkygizmo</p>
            <h3 class="brand-aside-title">STUDIOS</h3>
            <ul class="brand-aside-locations">
                <li><strong>SOUTH KOREA</strong><span>Seoul</span></li>
                <li><strong>CHINA</strong><span>Hangzhou · Foshan</span></li>
            </ul>
            <p class="brand-aside-email">funkkygizmo.mari&#64;gmail.com</p>
            <p class="brand-aside-hours">평일 10:00 – 19:00 (KST)</p>
        </aside>
    </div>
</section>

<%@ include file="common/footer.jspf" %>
