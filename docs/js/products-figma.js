(function () {
    'use strict';

    var modal = document.getElementById('productsModal');
    if (!modal) return;

    var titleEl = document.getElementById('productsModalTitle');
    var panelEls = modal.querySelectorAll('[data-modal-panel]');
    var openTriggers = document.querySelectorAll('[data-product-modal]');
    var closeTriggers = modal.querySelectorAll('[data-modal-close]');
    var lastFocus = null;
    var scrollLockY = 0;

    function lockBodyScroll() {
        scrollLockY = window.scrollY || window.pageYOffset || 0;
        document.body.style.top = scrollLockY ? '-' + scrollLockY + 'px' : '';
        document.body.classList.add('products-modal-open');
    }

    function unlockBodyScroll() {
        document.body.classList.remove('products-modal-open');
        document.body.style.top = '';
        window.scrollTo(0, scrollLockY);
    }

    function resetPanelScroll(panel) {
        if (!panel) return;
        panel.scrollTop = 0;
        if (typeof panel.scrollTo === 'function') {
            panel.scrollTo(0, 0);
        }
    }

    function resetAllPanelScroll() {
        panelEls.forEach(resetPanelScroll);
    }

    function openModal(id, title) {
        lastFocus = document.activeElement;
        if (titleEl) titleEl.textContent = title || '';

        var activePanel = null;

        panelEls.forEach(function (panel) {
            var isTarget = panel.getAttribute('data-modal-panel') === String(id);
            panel.hidden = !isTarget;
            if (isTarget) {
                activePanel = panel;
            }
        });

        resetAllPanelScroll();

        modal.hidden = false;
        modal.setAttribute('aria-hidden', 'false');
        lockBodyScroll();

        resetPanelScroll(activePanel);
        requestAnimationFrame(function () {
            resetPanelScroll(activePanel);
        });

        var closeBtn = modal.querySelector('.products-figma-modal-close');
        if (closeBtn) closeBtn.focus({ preventScroll: true });
    }

    function closeModal() {
        resetAllPanelScroll();

        modal.hidden = true;
        modal.setAttribute('aria-hidden', 'true');
        unlockBodyScroll();

        panelEls.forEach(function (panel) {
            panel.hidden = true;
        });

        if (lastFocus && typeof lastFocus.focus === 'function') {
            lastFocus.focus({ preventScroll: true });
        }
    }

    openTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            openModal(
                trigger.getAttribute('data-product-modal'),
                trigger.getAttribute('data-modal-title')
            );
        });
    });

    closeTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', function (event) {
        if (!modal.hidden && event.key === 'Escape') {
            closeModal();
        }
    });
})();
