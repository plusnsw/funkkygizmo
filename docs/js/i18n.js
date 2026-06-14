(function () {
    'use strict';

    var STORAGE_KEY = 'fg-lang';
    var DEFAULT_LANG = 'ko';

    var messages = {
        ko: {
            'meta.about.title': 'About | FUNKKY GIZMO',
            'meta.products.title': 'Product | FUNKKY GIZMO',
            'meta.contact.title': 'Contact | FUNKKY GIZMO',
            'nav.openMenu': '메뉴 열기',
            'about.hero.lead': '펑키기즈모는 작가의 예술적 상상력을 굿즈와 오브제로<br>구현하는 \'<strong class="about-figma-lead-em">아트-프로덕트 스튜디오</strong>\'입니다.',
            'about.hero.btn.product': 'View Product',
            'about.hero.btn.contact': 'Contact Us',
            'about.node.funkky': '감각적인 아이디어와<br>예술적 상상력',
            'about.node.gizmo': '정교한 제작으로<br>완성되는 오브제',
            'about.connector.top': '예술적 상상력을 오브제로 완성하는 이름',
            'about.who.p1': '펑키기즈모는 작가의 예술적 상상력을 굿즈와 오브제로<br>구현하는 아트-프로덕트 스튜디오입니다.',
            'about.who.p2': '우리는 단순히 이미지를 옮기는 데 그치지 않습니다.<br>작가의 세계관과 작품의 분위기를 이해하고, 소재의 선택<br>과 제작 방식까지 함께 고민해, 오래 남고 의미 있게 사용<br>되는 제품을 만듭니다.',
            'about.approach.creative': '브랜드와 콘텐츠의 정체성을 감각적인<br>디자인으로 구현합니다.',
            'about.approach.custom': '다양한 굿즈를 맞춤형으로 기획 제작합니다.',
            'about.approach.quality': '작가의 아트워크와 가이드라인을 존중하며<br>높은 품질로 제작합니다.',
            'about.approach.sustainable': '친환경 소재와 지속 가능한 제작 방식을<br>연구하며 더 나은 미래를 만듭니다.',
            'about.studios.lead': '펑키기즈모 글로벌 스튜디오는 사람과 예술 그리고 사물을 연결하고 엄선한 공급체인 네트워크를 보유하고 있습니다.',
            'about.products.lead1': '타협하지 않는',
            'about.products.lead2': '소재와 공법의 미<span class="about-figma-products-anchor">학</span>',
            'about.products.btn': 'View Product',
            'about.cta.line1': '당신의 작품은 또 다른 걸작으로 재탄생할 것입니다.',
            'about.cta.line2': '작품의 세계관을 일상 속으로 전달하세요.',
            'about.cta.btn': 'Contact Us',
            'about.imagine.line1': '작가님의 소중한 작품을 믿고 맡길 수 있는',
            'about.imagine.line2': '\'기술적/비즈니스적 파트너\'',
            'footer.tagline1': '아트와 오브제를 연결하는',
            'footer.tagline2': '크리에이티브 파트너',
            'products.headline1': '우리는 예술을 오브제로 만들고',
            'products.headline2': '오래 기억될 경험으로 남깁니다.',
            'products.lead1': '제품을 제작할 때 <strong>소재의 선택</strong>부터 <strong>제작 방식</strong>, <strong>사용성</strong>, <strong>패키지</strong> 구성까지 함께 고민합니다.',
            'products.lead2': '오래 남고 의미 있게 사용되는 굿즈를 만드는 것이 우리의 기준입니다.',
            'products.card.material': '목적에 맞는 소재 선택',
            'products.card.making': '지속 가능한 제작 방식',
            'products.card.use': '오래 사용되는 형태와 소재 설계',
            'products.card.package': '낭비를 줄이는 패키지 구성',
            'products.modal.1.title': '전시·행사 굿즈',
            'products.modal.2.title': '디자이너 커스텀 굿즈',
            'products.modal.3.title': '브랜드 프로모션 굿즈',
            'products.tap1.alt': '01 Exhibition and Event Goods — 전시·행사 굿즈',
            'products.tap2.alt': '02 Customized Goods for Designer — 디자이너 커스텀 굿즈',
            'products.tap3.alt': '03 Promotion Goods for Brand — 브랜드 프로모션 굿즈',
            'products.modal.close': '닫기',
            'modal1.t1': '전시 이미지를 입체적으로 담은 굿즈',
            'modal1.t1.p1': '전시의 메인 이미지, 캐릭터, 작품 분위기를 시각적으로 살려 공간의 기억을 오래 남기는 굿즈입니다.',
            'modal1.t1.p2': '단순한 인쇄물이 아니라 전시의 분위기를 손에 잡히는 형태로 표현합니다.',
            'modal1.t2': '관람객이 부담 없이 소장하는 굿즈',
            'modal1.t2.p1': '가볍게 구매할 수 있으면서도 오래 보관하고 싶은 형태로 기획을 진행합니다.',
            'modal1.t2.p2': '전시 관람 후 자연스럽게 가져가고 싶은 대표 굿즈로 제작합니다.',
            'modal1.t3': '행사의 특별함을 높이는 한정 굿즈',
            'modal1.t3.p1': '전시 한정판, VIP 증정품, 기념 패키지처럼 행사의 가치를 높이는 굿즈입니다.',
            'modal1.t3.p2': '특별한 구성과 완성도로 행사의 인상을 더 오래 남깁니다.',
            'modal1.t4': '다양성을 충족시켜줄 굿즈 제품군',
            'modal1.t4.p1': '우리는 전시의 주제에 부합하는 다양한 굿즈를 원스텝으로 제작합니다.',
            'modal1.t4.p2': '여러가지 형태로 전시의 여운을 간직하도록 굿즈의 다양성을 보장하도록 여러 굿즈를 기획합니다.',
            'modal2.t1': '작가들의 감도를 살린 굿즈',
            'modal2.t1.p1': '캐릭터, 일러스트, 그래픽의 분위기를 해치지 않고 작가 고유의 색감을 담아냅니다.',
            'modal2.t1.p2': '작품이 가진 결, 선, 무드를 굿즈의 형태에 맞게 자연스럽게 풀어냅니다.',
            'modal2.t2': '팬이 소장하고 싶은 굿즈',
            'modal2.t2.p1': '단순한 이미지 상품이 아니라 팬들이 간직하고 싶어 하는 소장형 굿즈로 기획합니다.',
            'modal2.t2.p2': '작가 마켓, 개인전, 온라인 판매용 상품으로 활용하기 좋은 굿즈를 제작합니다.',
            'modal2.t2.p3': '제품의 완성도를 높여주는 도자기, PVC등 여러 재질을 고민하고 최적의 소재와 공법을 사용합니다.',
            'modal2.t3': '개인 브랜드를 확장하는 굿즈',
            'modal2.t3.p1': '디자이너의 작업물을 하나의 브랜드 상품으로 확장할 수 있도록 구성합니다.',
            'modal2.t3.p2': '첫 굿즈 제작부터 팝업, 마켓, 시리즈 상품까지 연결될 수 있는 방향을 제안합니다.',
            'modal2.t4': '다양성을 충족시켜줄 굿즈 제품군',
            'modal2.t4.p1': '우리는 작품의 주제에 부합하는 다양한 굿즈를 원스텝으로 제작합니다.',
            'modal2.t4.p2': '여러가지 형태로 작품의 여운을 간직하도록 굿즈의 다양성을 보장하도록 여러 굿즈를 기획합니다.',
            'modal3.t1': '브랜드 이미지를 자연스럽게 남기는 굿즈',
            'modal3.t1.p1': '고객이 일상 속에서 자연스럽게 브랜드를 기억할 수 있도록 기획합니다.',
            'modal3.t1.p2': '브랜드 컬러, 캠페인 메시지, 제품 이미지를 굿즈의 형태에 맞게 담아냅니다.',
            'modal3.t2': '실제로 사용하고 보관하는 홍보 굿즈',
            'modal3.t2.p1': '받고 버려지는 판촉물이 아니라, 고객이 오래 사용하고 보관할 수 있는 굿즈를 목표로 합니다.',
            'modal3.t2.p2': '실용성과 디자인 완성도를 함께 고려해 브랜드 노출 효과를 높입니다.',
            'modal3.t3': '기업 행사와 증정 목적에 맞춘 굿즈',
            'modal3.t3.p1': '박람회, 런칭 행사, 기념품, VIP 증정용처럼 목적에 맞는 구성을 제안합니다.',
            'modal3.t3.p2': '브랜드의 신뢰감과 완성도를 보여줄 수 있는 굿즈로 제작합니다.',
            'modal3.t4': '다양성을 충족시켜줄 굿즈 제품군',
            'modal3.t4.p1': '우리는 브랜드의 정체성에 부합하는 다양한 굿즈를 원스텝으로 제작합니다.',
            'modal3.t4.p2': '여러가지 형태로 브랜드이미지를 전달할수 있도록 다양성을 충족시키는 기획을 합니다.',
            'contact.lead1': '브랜드 협업, 제품 문의,',
            'contact.lead2': '파트너십 제안 등 언제든 편하게 연락 주세요.',
            'contact.submit': '문의하기',
            'contact.note': 'Your information is safe with us. We will contact you within 1-3 business days.<br>긴급 문의: <a href="mailto:funkkygizmo.mari@gmail.com">funkkygizmo.mari@gmail.com</a>',
            'contact.alert': '문의 전송 기능은 현재 준비 중입니다.\n\n아래 이메일로 문의해 주세요.\nfunkkygizmo.mari@gmail.com'
        },
        en: {
            'meta.about.title': 'About | FUNKKY GIZMO',
            'meta.products.title': 'Product | FUNKKY GIZMO',
            'meta.contact.title': 'Contact | FUNKKY GIZMO',
            'nav.openMenu': 'Open menu',
            'about.hero.lead': 'FUNKKY GIZMO is an <strong class="about-figma-lead-em">art-product studio</strong> that turns artists\' creative imagination into goods and objects.',
            'about.hero.btn.product': 'View Product',
            'about.hero.btn.contact': 'Contact Us',
            'about.node.funkky': 'Sensory ideas and<br>artistic imagination',
            'about.node.gizmo': 'Objects completed<br>through refined production',
            'about.connector.top': 'A name that completes artistic imagination as objects',
            'about.who.p1': 'FUNKKY GIZMO is an art-product studio that turns artists\' creative imagination into goods and objects.',
            'about.who.p2': 'We go beyond simply transferring images. We understand an artist\'s worldview and the mood of their work, and consider material choices and production methods together to create products that last and are meaningful to use.',
            'about.approach.creative': 'We express brand and content identity through<br>sensitive design.',
            'about.approach.custom': 'We plan and produce a wide range of custom goods.',
            'about.approach.quality': 'We respect artists\' artwork and guidelines<br>and produce with high quality.',
            'about.approach.sustainable': 'We research eco-friendly materials and sustainable production<br>to build a better future.',
            'about.studios.lead': 'FUNKKY GIZMO global studios connect people, art, and objects with a curated supply chain network.',
            'about.products.lead1': 'Uncompromising materials & craft',
            'about.products.lead2': 'aesthet<span class="about-figma-products-anchor">ics</span>',
            'about.products.btn': 'View Product',
            'about.cta.line1': 'Your work will be reborn as another masterpiece.',
            'about.cta.line2': 'Bring the world of your work into everyday life.',
            'about.cta.btn': 'Contact Us',
            'about.imagine.line1': 'A technical and business partner',
            'about.imagine.line2': 'you can trust with your precious work',
            'footer.tagline1': 'Connecting art and objects',
            'footer.tagline2': 'Your creative partner',
            'products.headline1': 'We turn art into objects',
            'products.headline2': 'and lasting experiences.',
            'products.lead1': 'When making products, we consider everything from <strong>material selection</strong> and <strong>production methods</strong> to <strong>usability</strong> and <strong>packaging</strong>.',
            'products.lead2': 'Our standard is goods that remain meaningful and useful over time.',
            'products.card.material': 'Material choices suited to each purpose',
            'products.card.making': 'Sustainable production methods',
            'products.card.use': 'Forms and materials designed for long-term use',
            'products.card.package': 'Packaging that reduces waste',
            'products.modal.1.title': 'Exhibition & Event Goods',
            'products.modal.2.title': 'Designer Custom Goods',
            'products.modal.3.title': 'Brand Promotion Goods',
            'products.tap1.alt': '01 Exhibition and Event Goods',
            'products.tap2.alt': '02 Customized Goods for Designer',
            'products.tap3.alt': '03 Promotion Goods for Brand',
            'products.modal.close': 'Close',
            'modal1.t1': 'Goods that capture exhibition imagery in depth',
            'modal1.t1.p1': 'Goods that visually preserve main exhibition imagery, characters, and atmosphere so the memory of the space lasts longer.',
            'modal1.t1.p2': 'Not simple prints, but forms that make the exhibition atmosphere tangible.',
            'modal1.t2': 'Goods visitors can collect with ease',
            'modal1.t2.p1': 'Planned in forms that are easy to buy yet worth keeping for a long time.',
            'modal1.t2.p2': 'Representative goods visitors naturally want to take home after viewing an exhibition.',
            'modal1.t3': 'Limited goods that elevate special events',
            'modal1.t3.p1': 'Goods that increase the value of an event, such as exhibition limited editions, VIP gifts, and commemorative packages.',
            'modal1.t3.p2': 'Special composition and finish that keep the impression of an event alive longer.',
            'modal1.t4': 'A product range that satisfies diversity',
            'modal1.t4.p1': 'We produce a diverse range of goods aligned with exhibition themes in one step.',
            'modal1.t4.p2': 'We plan multiple goods in various forms to preserve the afterglow of an exhibition.',
            'modal2.t1': 'Goods that preserve artists\' sensibility',
            'modal2.t1.p1': 'We capture each artist\'s unique color without breaking the mood of characters, illustrations, and graphics.',
            'modal2.t1.p2': 'We naturally translate the texture, lines, and mood of a work into the form of goods.',
            'modal2.t2': 'Goods fans want to collect',
            'modal2.t2.p1': 'Planned as collectible goods fans want to keep, not simple image merchandise.',
            'modal2.t2.p2': 'Ideal for artist markets, solo exhibitions, and online sales.',
            'modal2.t2.p3': 'We consider ceramics, PVC, and other materials to choose the best process and finish.',
            'modal2.t3': 'Goods that expand a personal brand',
            'modal2.t3.p1': 'Structured so a designer\'s work can expand into brand products.',
            'modal2.t3.p2': 'We suggest directions that connect from first goods production to pop-ups, markets, and series products.',
            'modal2.t4': 'A product range that satisfies diversity',
            'modal2.t4.p1': 'We produce a diverse range of goods aligned with each work\'s theme in one step.',
            'modal2.t4.p2': 'We plan multiple goods in various forms to preserve the afterglow of a work.',
            'modal3.t1': 'Goods that naturally leave a brand image',
            'modal3.t1.p1': 'Planned so customers can naturally remember a brand in everyday life.',
            'modal3.t1.p2': 'Brand colors, campaign messages, and product imagery are adapted to the form of goods.',
            'modal3.t2': 'Promotional goods people actually use and keep',
            'modal3.t2.p1': 'Aimed at goods customers can use and keep for a long time, not giveaways that are discarded.',
            'modal3.t2.p2': 'We increase brand exposure by balancing practicality and design quality.',
            'modal3.t3': 'Goods tailored to corporate events and gifting',
            'modal3.t3.p1': 'We propose compositions suited to trade shows, launch events, commemorative gifts, and VIP giveaways.',
            'modal3.t3.p2': 'Produced as goods that show a brand\'s credibility and quality.',
            'modal3.t4': 'A product range that satisfies diversity',
            'modal3.t4.p1': 'We produce a diverse range of goods aligned with brand identity in one step.',
            'modal3.t4.p2': 'We plan multiple goods in various forms to deliver brand imagery.',
            'contact.lead1': 'For brand collaborations, product inquiries,',
            'contact.lead2': 'or partnership proposals, feel free to reach out anytime.',
            'contact.submit': 'Send Inquiry',
            'contact.note': 'Your information is safe with us. We will contact you within 1-3 business days.<br>Urgent inquiries: <a href="mailto:funkkygizmo.mari@gmail.com">funkkygizmo.mari@gmail.com</a>',
            'contact.alert': 'The inquiry form is currently being prepared.\n\nPlease contact us at:\nfunkkygizmo.mari@gmail.com'
        }
    };

    function getLang() {
        var stored = localStorage.getItem(STORAGE_KEY);
        return stored === 'en' ? 'en' : DEFAULT_LANG;
    }

    function t(key) {
        var lang = getLang();
        var table = messages[lang] || messages[DEFAULT_LANG];
        return table[key] || messages[DEFAULT_LANG][key] || key;
    }

    function getAboutHomeHref() {
        var link = document.querySelector('.main-nav--figma a[data-nav="about"]');
        return link ? link.getAttribute('href') : 'index.html';
    }

    function isAboutHome() {
        var pageId = document.body.getAttribute('data-page') || '';
        if (pageId === 'about') return true;
        var path = window.location.pathname;
        if (path === '/' || /\/index\.html$/.test(path)) {
            return !path.includes('/products/') && !path.includes('/contact');
        }
        return false;
    }

    function setActiveLangButton(lang) {
        document.querySelectorAll('.lang-nav__item[data-lang]').forEach(function (btn) {
            btn.classList.toggle('lang-nav__item--active', btn.getAttribute('data-lang') === lang);
        });
    }

    function applyTranslations() {
        var lang = getLang();
        document.documentElement.lang = lang === 'en' ? 'en' : 'ko';

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            el.textContent = t(el.getAttribute('data-i18n'));
        });

        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            el.innerHTML = t(el.getAttribute('data-i18n-html'));
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
        });

        document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-title');
            el.setAttribute('data-modal-title', t(key));
        });

        document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
            el.setAttribute('alt', t(el.getAttribute('data-i18n-alt')));
        });

        document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
            el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
        });

        if (document.body.getAttribute('data-i18n-doc-title')) {
            document.title = t(document.body.getAttribute('data-i18n-doc-title'));
        }

        setActiveLangButton(lang);

        document.documentElement.classList.add('i18n-ready');

        if (typeof window.FunkyGizmo !== 'undefined' && window.FunkyGizmo.onLangApplied) {
            window.FunkyGizmo.onLangApplied(lang);
        }

        if (document.querySelector('.about-figma-products-lead-block')) {
            window.dispatchEvent(new Event('resize'));
        }
    }

    function switchLang(lang) {
        if (lang !== 'ko' && lang !== 'en') return;

        var current = getLang();
        localStorage.setItem(STORAGE_KEY, lang);

        if (current === lang && isAboutHome()) {
            applyTranslations();
            return;
        }

        window.location.href = getAboutHomeHref();
    }

    function initLangNav() {
        document.querySelectorAll('.lang-nav__item[data-lang]').forEach(function (btn) {
            btn.addEventListener('click', function () {
                switchLang(btn.getAttribute('data-lang'));
            });
        });
    }

    window.FG_I18N = {
        getLang: getLang,
        t: t,
        apply: applyTranslations
    };

    initLangNav();
    applyTranslations();
})();
