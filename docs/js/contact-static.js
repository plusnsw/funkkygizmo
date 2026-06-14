(function () {
    'use strict';

    var form = document.getElementById('contactForm');
    if (!form) return;

    var config = window.SITE_CONFIG || {};
    var formUrl = config.googleFormUrl || '';
    var isConfigured = formUrl.indexOf('REPLACE_WITH_YOUR_FORM_ID') < 0 && formUrl.length > 10;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!form.reportValidity()) {
            return;
        }

        if (isConfigured) {
            window.open(formUrl, '_blank', 'noopener');
            return;
        }

        window.alert(
            window.FG_I18N
                ? window.FG_I18N.t('contact.alert')
                : '문의 전송 기능은 현재 준비 중입니다.\n\n아래 이메일로 문의해 주세요.\nfunkkygizmo.mari@gmail.com'
        );
        form.reset();
    });
})();
