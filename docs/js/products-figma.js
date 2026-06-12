(function () {
    'use strict';

    var modal = document.getElementById('productsModal');
    if (!modal) return;

    var titleEl = document.getElementById('productsModalTitle');
    var panelEls = modal.querySelectorAll('[data-modal-panel]');
    var openTriggers = document.querySelectorAll('[data-product-modal]');
    var closeTriggers = modal.querySelectorAll('[data-modal-close]');
    var lastFocus = null;

    function openModal(id, title) {
        lastFocus = document.activeElement;
        if (titleEl) titleEl.textContent = title || '';

        panelEls.forEach(function (panel) {
            var isTarget = panel.getAttribute('data-modal-panel') === String(id);
            panel.hidden = !isTarget;
        });

        modal.hidden = false;
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('products-modal-open');

        var closeBtn = modal.querySelector('.products-figma-modal-close');
        if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
        modal.hidden = true;
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('products-modal-open');

        panelEls.forEach(function (panel) {
            panel.hidden = true;
        });

        if (lastFocus && typeof lastFocus.focus === 'function') {
            lastFocus.focus();
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
