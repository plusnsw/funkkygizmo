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
