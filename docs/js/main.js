(function () {
    'use strict';

    var ctx = document.body.getAttribute('data-context-path') || getContextPath();

    function getContextPath() {
        var path = window.location.pathname;
        if (path.indexOf('/products') === 0) return '';
        if (path === '/' || path.endsWith('/')) return '';
        var parts = path.split('/').filter(Boolean);
        if (parts.length > 0 && ['products', 'about', 'contact', 'team'].indexOf(parts[0]) >= 0) {
            return '';
        }
        return '';
    }

    initMobileNav();
    initActiveNav();
    initProductsSmileyLayout();

    function initMobileNav() {
        var navToggle = document.getElementById('navToggle');
        var mainNav = document.getElementById('mainNav');
        if (!navToggle || !mainNav) return;

        navToggle.addEventListener('click', function () {
            mainNav.classList.toggle('open');
        });
    }

    function isHomeEntry(path) {
        if (!path || path === '/') return true;
        if (/\/funkkygizmo\/?$/.test(path)) return true;
        if (path === '/index.html' || path.endsWith('/index.html')) {
            var base = path.replace(/\/index\.html$/, '') || '/';
            var segments = base.split('/').filter(Boolean);
            return segments.length === 0 || (segments.length === 1 && segments[0] === 'funkkygizmo');
        }
        return false;
    }

    function initActiveNav() {
        var path = window.location.pathname;
        var pageId = document.body.getAttribute('data-page') || '';

        document.querySelectorAll('[data-nav]').forEach(function (link) {
            link.classList.remove('active');
            var nav = link.getAttribute('data-nav');
            var isActive = false;

            if (nav === 'home' && (path === '/' || path.endsWith('/index.jsp'))) {
                isActive = true;
            } else if (nav === 'services' && (path === '/' || path.indexOf('#services') >= 0)) {
                isActive = path === '/' || window.location.hash === '#services';
            } else if (nav === 'products' && (path.indexOf('/products') >= 0 || pageId === 'products' || pageId === 'product-detail')) {
                isActive = true;
            } else if (nav === 'about' && (pageId === 'about' || path.indexOf('/about') >= 0 || isHomeEntry(path))) {
                isActive = true;
            } else if (nav === 'team' && path.indexOf('/team') >= 0) {
                isActive = true;
            } else if (nav === 'contact' && path.indexOf('/contact') >= 0) {
                isActive = true;
            } else if (nav === 'journey' && path.indexOf('/contact') >= 0) {
                isActive = true;
            } else if (nav === 'product' && (path.indexOf('/products') >= 0 || pageId === 'products' || pageId === 'product-detail')) {
                isActive = true;
            } else if (pageId === nav) {
                isActive = true;
            }

            if (isActive) {
                link.classList.add('active');
            }
        });
    }

    function initProductsSmileyLayout() {
        var block = document.querySelector('.about-figma-products-lead-block');
        var anchor = document.querySelector('.about-figma-products-anchor');
        var img = document.querySelector('.about-figma-product-img--1');
        var line1 = document.querySelector('.about-figma-products-lead-line:first-child');
        var line2 = document.querySelector('.about-figma-products-lead-line--2');
        if (!block || !anchor || !img || !line1 || !line2) return;

        var PNG_LEFT_INSET = 0.16;
        var ANCHOR_OVERLAP = 0.33;

        function getLang() {
            return document.documentElement.lang === 'en' ? 'en' : 'ko';
        }

        function positionSmiley() {
            var blockRect = block.getBoundingClientRect();
            var anchorRect = anchor.getBoundingClientRect();
            var line1Rect = line1.getBoundingClientRect();
            var line2Rect = line2.getBoundingClientRect();
            var imgWidth = img.getBoundingClientRect().width;
            var lang = getLang();

            if (!blockRect.width || !imgWidth) return;

            var left;
            var top = (line1Rect.top + line2Rect.bottom) / 2 - blockRect.top;

            if (lang === 'en') {
                // Hang off the end of "ics" only — keep "aesthet" readable.
                left = anchorRect.left - blockRect.left - imgWidth * 0.04;
            } else {
                var overlap = anchorRect.width * ANCHOR_OVERLAP;
                var pngInset = imgWidth * PNG_LEFT_INSET;
                left = anchorRect.right - blockRect.left - overlap - pngInset;
            }

            img.style.left = Math.round(left) + 'px';
            img.style.top = Math.round(top) + 'px';
        }

        function schedulePosition() {
            window.requestAnimationFrame(positionSmiley);
        }

        if (img.complete) {
            schedulePosition();
        } else {
            img.addEventListener('load', schedulePosition);
        }

        if (document.fonts && document.fonts.ready) {
            document.fonts.ready.then(schedulePosition);
        }

        var resizeTimer;
        window.addEventListener('resize', function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(schedulePosition, 100);
        });

        if (typeof ResizeObserver !== 'undefined') {
            var observer = new ResizeObserver(schedulePosition);
            observer.observe(block);
            observer.observe(img);
            observer.observe(line1);
            observer.observe(line2);
        }
    }

    window.FunkyGizmo = window.FunkyGizmo || {};
    window.FunkyGizmo.showToast = function (message) {
        var existing = document.querySelector('.toast');
        if (existing) existing.remove();

        var toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(function () {
            toast.remove();
        }, 4000);
    };
})();
