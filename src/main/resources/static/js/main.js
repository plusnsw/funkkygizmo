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

    function initActiveNav() {
        var path = window.location.pathname;
        var pageId = document.body.getAttribute('data-page') || '';

        document.querySelectorAll('[data-nav]').forEach(function (link) {
            var nav = link.getAttribute('data-nav');
            var isActive = false;

            if (nav === 'home' && (path === '/' || path.endsWith('/index.jsp'))) {
                isActive = true;
            } else if (nav === 'services' && (path === '/' || path.indexOf('#services') >= 0)) {
                isActive = path === '/' || window.location.hash === '#services';
            } else if (nav === 'products' && path.indexOf('/products') >= 0) {
                isActive = true;
            } else if (nav === 'about' && path.indexOf('/about') >= 0) {
                isActive = true;
            } else if (nav === 'team' && path.indexOf('/team') >= 0) {
                isActive = true;
            } else if (nav === 'contact' && path.indexOf('/contact') >= 0) {
                isActive = true;
            } else if (pageId === nav || (pageId === 'product-detail' && nav === 'products')) {
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
