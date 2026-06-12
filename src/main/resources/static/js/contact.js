(function () {
    'use strict';

    var form = document.getElementById('contactForm');
    var submitBtn = document.getElementById('contactSubmit');
    if (!form) return;

    var ctx = document.body.getAttribute('data-context-path') || '';

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!validateForm()) return;

        var data = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            company: form.company.value.trim(),
            inquiryType: form.inquiryType.value,
            message: form.message.value.trim()
        };

        setSubmitting(true);

        fetch(ctx + '/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(function (res) {
                return res.json().then(function (body) {
                    return { ok: res.ok, status: res.status, body: body };
                });
            })
            .then(function (result) {
                if (result.ok) {
                    showMessage(result.body.message || '문의 메일을 보냈습니다.');
                    form.reset();
                    return;
                }

                if (result.body.mailto) {
                    openMailto(result.body.mailto, result.body.message);
                    return;
                }

                showMessage(result.body.message || '전송에 실패했습니다.');
            })
            .catch(function () {
                showMessage('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
            })
            .finally(function () {
                setSubmitting(false);
            });
    });

    function validateForm() {
        var name = form.name.value.trim();
        var email = form.email.value.trim();
        var message = form.message.value.trim();

        if (!name) {
            alert('이름을 입력해 주세요.');
            form.name.focus();
            return false;
        }

        if (!email || email.indexOf('@') < 0) {
            alert('올바른 이메일을 입력해 주세요.');
            form.email.focus();
            return false;
        }

        if (!message) {
            alert('프로젝트 설명을 입력해 주세요.');
            form.message.focus();
            return false;
        }

        return true;
    }

    function setSubmitting(loading) {
        if (!submitBtn) return;
        submitBtn.disabled = loading;
        submitBtn.setAttribute('aria-busy', loading ? 'true' : 'false');
    }

    function showMessage(message) {
        if (window.FunkyGizmo && window.FunkyGizmo.showToast) {
            window.FunkyGizmo.showToast(message);
        } else {
            alert(message);
        }
    }

    function openMailto(mailtoUrl, notice) {
        if (notice) {
            showMessage(notice);
        }
        window.location.href = mailtoUrl;
    }
})();
