(function () {
    'use strict';

    var filterBar = document.getElementById('productFilter');
    var productList = document.getElementById('productList');
    var filterEmpty = document.getElementById('filterEmpty');

    if (!filterBar || !productList) return;

    filterBar.addEventListener('click', function (e) {
        var btn = e.target.closest('.brand-filter-btn');
        if (!btn) return;

        var category = btn.getAttribute('data-category');
        filterBar.querySelectorAll('.brand-filter-btn').forEach(function (b) {
            b.classList.toggle('active', b === btn);
        });
        filterProducts(category);
    });

    function filterProducts(category) {
        var cards = productList.querySelectorAll('.brand-object-card');
        var visible = 0;

        cards.forEach(function (card) {
            var cardCategory = card.getAttribute('data-category');
            var show = category === 'all' || cardCategory === category;
            card.style.display = show ? '' : 'none';
            if (show) visible++;
        });

        if (filterEmpty) {
            filterEmpty.classList.toggle('hidden', visible > 0);
        }
    }
})();
