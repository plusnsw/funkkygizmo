(function () {
    'use strict';

    var config = window.SITE_CONFIG || {};
    var formUrl = config.googleFormUrl || '';
    var embedUrl = config.googleFormEmbedUrl || '';
    var link = document.getElementById('googleFormLink');
    var embed = document.getElementById('googleFormEmbed');
    var note = document.getElementById('formSetupNote');
    var actions = document.querySelector('.brand-google-form-actions');

    var isConfigured = formUrl.indexOf('REPLACE_WITH_YOUR_FORM_ID') < 0 && formUrl.length > 10;

    if (!isConfigured) {
        if (link) {
            link.href = 'https://forms.google.com';
            link.textContent = 'Google Form 설정 중';
        }
        if (note) {
            note.textContent = '※ 관리자: docs/js/config.js에 Google Form URL을 등록해 주세요. (GOOGLE-FORM-SETUP.md 참고)';
        }
        return;
    }

    if (note) {
        note.textContent = '※ 아래 양식을 작성해 주시면 스튜디오로 전달됩니다.';
    }

    if (link) {
        link.href = formUrl;
    }

    if (embed && embedUrl.indexOf('REPLACE_WITH_YOUR_FORM_ID') < 0) {
        embed.src = embedUrl;
        embed.classList.remove('hidden');
    }
})();
