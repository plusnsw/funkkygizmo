<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<c:set var="pageTitle" value="Team"/>
<c:set var="pageId" value="team"/>
<c:set var="extraCss" value="team.css"/>
<c:set var="ctx" value="${pageContext.request.contextPath}"/>
<%@ include file="common/header.jspf" %>

<div class="team-page">
    <div class="team-layout">
        <div class="team-main">
            <header class="team-hero">
                <div class="team-hero-top">
                    <div class="team-hero-copy">
                        <h1 class="team-title">GLOBAL TEAM</h1>
                        <p class="team-intro">
                            우리는 사람과 예술, 사물을 연결하며 전 세계에 즐거움과 영감을 전합니다.
                        </p>
                        <p class="team-keywords">
                            CONNECT · INSPIRE · CREATE
                            <span class="team-keywords-icon" aria-hidden="true">
                                <c:set var="logoClass" value="brand-logo-img--keywords"/>
                                <%@ include file="common/brand-logo.jspf" %>
                            </span>
                        </p>
                    </div>
                    <div class="team-map" aria-hidden="true">
                        <div class="team-map-dots"></div>
                        <div class="map-pin map-pin-kr">
                            <span class="map-pin-dot"></span>
                            <span class="map-pin-label"><strong>SOUTH KOREA</strong><br/>(Seoul)</span>
                        </div>
                        <div class="map-pin map-pin-cn">
                            <span class="map-pin-dot"></span>
                            <span class="map-pin-label"><strong>CHINA</strong><br/>(Hangzhou / Foshan)</span>
                        </div>
                    </div>
                </div>
            </header>

            <section class="team-grid-section">
                <div class="team-grid">
                    <c:forEach var="member" items="${teamMembers}">
                        <article class="team-card">
                            <span class="team-card-badge" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="10" fill="#0a2dff"/><circle cx="12" cy="12" r="4" fill="#fff"/></svg>
                            </span>
                            <div class="team-card-inner">
                                <div class="team-avatar ${member.avatarStyle}" aria-hidden="true">
                                    <div class="avatar-face">
                                        <span class="avatar-eye"></span>
                                        <span class="avatar-eye"></span>
                                        <span class="avatar-mouth"></span>
                                    </div>
                                </div>
                                <div class="team-card-info">
                                    <h2 class="team-member-name"><c:out value="${member.name}"/></h2>
                                    <ul class="team-member-roles">
                                        <c:forEach var="role" items="${member.roles}">
                                            <li><c:out value="${role}"/></li>
                                        </c:forEach>
                                    </ul>
                                </div>
                            </div>
                        </article>
                    </c:forEach>
                </div>
            </section>
        </div>

        <aside class="team-sidebar">
            <section class="sidebar-block">
                <h3 class="sidebar-title">STUDIOS</h3>
                <ul class="studio-list">
                    <li>
                        <span class="studio-icon studio-icon-seoul" aria-hidden="true"></span>
                        <div>
                            <strong>SOUTH KOREA</strong>
                            <span>Seoul</span>
                        </div>
                    </li>
                    <li>
                        <span class="studio-icon studio-icon-china" aria-hidden="true"></span>
                        <div>
                            <strong>CHINA</strong>
                            <span>Hangzhou · Foshan</span>
                        </div>
                    </li>
                </ul>
            </section>
            <section class="sidebar-block">
                <h3 class="sidebar-title">CONNECT</h3>
                <p class="sidebar-label">INSTAGRAM @</p>
                <a class="instagram-link" href="#" onclick="return false;">funkkygizmo</a>
            </section>
            <a class="btn-team-contact" href="${ctx}/contact">CONTACT US <span aria-hidden="true">→</span></a>
        </aside>
    </div>

    <footer class="team-page-footer">
        <div class="team-footer-inner">
            <div class="team-footer-logo" aria-hidden="true">
                <c:set var="logoClass" value="brand-logo-img--footer"/>
                <%@ include file="common/brand-logo.jspf" %>
            </div>
            <div class="team-footer-cols">
                <div><strong>CONNECT</strong><span>연결하고</span></div>
                <div><strong>INSPIRE</strong><span>영감을 주고</span></div>
                <div><strong>CREATE</strong><span>함께 만듭니다</span></div>
            </div>
            <p class="team-footer-copy">© FUNKKY GIZMO</p>
        </div>
    </footer>
</div>

<%@ include file="common/footer.jspf" %>
