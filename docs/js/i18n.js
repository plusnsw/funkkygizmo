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
            'about.hero.sub': '당신의 작품과 브랜드를 소장하고 싶은 굿즈와 오브제로',
            'about.hero.lead1': '펑키기즈모는 친환경 소재와 지속 가능한 제작 방식을 고려하는',
            'about.hero.lead2': '굿즈·오브제 제작 스튜디오입니다.',
            'about.hero.btn.product': 'VIEW PRODUCTS',
            'about.hero.btn.contact': 'CONTACT US',
            'about.bridge.title': 'FROM IDEA TO OBJECTS',
            'about.node.funkky.line1': '감각적인 아이디어와',
            'about.node.funkky.line2': '창의적인 기획',
            'about.node.gizmo.line1': '높은 완성도와',
            'about.node.gizmo.line2': '정교한 제작',
            'about.connector.top': '아트와 오브제를 연결하는 크리에이티브 파트너',
            'about.connector.bottom': 'WE TURN IDEAS INTO WELL-CRAFTED OBJECTS.',
            'about.who.p1.line1': '펑키기즈모는 작가와 브랜드의 아이디어를 굿즈와 오브제로',
            'about.who.p1.line2': '제작하는 굿즈 · 오브제 제작 스튜디오입니다.',
            'about.who.p2.line1': '작품의 분위기와 브랜드의 메시지를 이해하고,',
            'about.who.p2.line2': '친환경적인 재료, 제작 방식, 패키지까지 함께 고민하여',
            'about.who.p2.line3': '오래 쓰이고 가치 있게 남는 제품을 만듭니다.',
            'about.approach.creative.line1': '작품과 브랜드의 성격을 이해하고, 제품으로 확장하기',
            'about.approach.creative.line2': '에 적합한 디자인 방향을 제안합니다.',
            'about.approach.custom': '다양한 소재로 맞춤형 제품으로 기획하고 제작합니다.',
            'about.approach.quality.line1': '작가와 브랜드의 아이덴티티를 이해하고 존중하면서',
            'about.approach.quality.line2': '높은 품질로 제작합니다.',
            'about.approach.sustainable.line1': '친환경 소재와 지속 가능한 제작 방식을 연구하며',
            'about.approach.sustainable.line2': '오래 사용할 수 있는 제품을 통해',
            'about.approach.sustainable.line3': '더 책임감 있는 제작과 소비를 지향합니다.',
            'about.studios.line1': '펑키기즈모는 서울과 중국의 제작 네트워크를 기반으로,',
            'about.studios.line2': '각 분야 전문가들과 협업하며 기획부터 생산까지',
            'about.studios.line3': '안정적인 제작 시스템을 운영하고 있습니다.',
            'about.products.subtitle': '소재부터 공정까지, 더 책임감 있게',
            'about.products.body.line1': '단순히 보기 좋은 제품이 아니라,',
            'about.products.body.line2': '오래 쓰이고 의미 있게 남을 수 있는 결과물을 지향합니다.',
            'about.products.btn': 'VIEW PRODUCTS',
            'about.cta.eyebrow': 'CREATE WITH US',
            'about.cta.title': '지금, 당신의 굿즈 프로젝트를 시작해보세요',
            'about.cta.line1': '굿즈, 오브제, 패키지 제작이 필요하다면',
            'about.cta.line2': '펑키기즈모와 함께 시작해보세요.',
            'about.cta.btn': 'CONTACT US',
            'about.imagine.line1': '기획부터 제작까지,',
            'about.imagine.line2': '작품의 가치를 제품으로 연결하는',
            'about.imagine.line3': '믿을 수 있는 파트너',
            'footer.tagline1': '아트와 오브제를 연결하는',
            'footer.tagline2': '크리에이티브 파트너',
            'products.headline': '작품을 굿즈와 오브제로, 오래 기억에 남는 경험으로',
            'products.lead': '펑키기즈모는 작품과 브랜드의 아이덴티티를 먼저 이해하고, 그에 맞는 소재와 제작 방식을 함께 고민합니다.<br>단순한 굿즈 제작이 아니라, 오래 쓰이고 의미 있게 남을 수 있는 굿즈와 오브제를 만듭니다.',
            'products.card.material': '작품에 맞는<br>소재 선택',
            'products.card.making': '아이디어에<br>맞는 제작',
            'products.card.experience': '오래 기억되는<br>사용 경험',
            'products.card.package': '완성도 높은<br>패키지',
            'products.closing.line1': '“ 정해진 규격, 제한된 소재의 기존 굿즈 제작 방식은',
            'products.closing.line2': '작가와 브랜드 철학을 담아내기에 너무나 좁은 틀입니다.',
            'products.closing.line3': '펑키기즈모는 작품을 가장 잘 드러낼 수 있는',
            'products.closing.line4': '최적의 제품 기획과 제작 서비스를 제공합니다.”',
            'products.modal.1.title': '전시·행사 굿즈',
            'products.modal.2.title': '디자이너 커스텀 굿즈',
            'products.modal.3.title': '브랜드 프로모션 굿즈',
            'products.tap1.label': '전시 · 행사 굿즈',
            'products.tap1.alt': '01 Exhibition and Event Goods — 전시·행사 굿즈',
            'products.tap2.label': '디자이너 커스텀 굿즈',
            'products.tap2.alt': '02 Customized Goods for Designer — 디자이너 커스텀 굿즈',
            'products.tap3.label': '브랜드 프로모션 굿즈',
            'products.tap3.alt': '03 Promotion Goods for Brand — 브랜드 프로모션 굿즈',
            'products.modal.close': '닫기',
            'modal1.t1': '전시 이미지를<br>입체적으로 담은 굿즈',
            'modal1.t1.p1': '전시의 메인 이미지, 캐릭터, 작품 분위기를 시각적으로<br>살려 공간의 기억을 오래 남기는 굿즈입니다.',
            'modal1.t1.p2': '단순한 인쇄물이 아니라 전시의 분위기를 손에 잡히는<br>형태로 표현합니다.',
            'modal1.t2': '관람객이 부담 없이<br>소장하는 굿즈',
            'modal1.t2.p1': '가볍게 구매할 수 있으면서도 오래 보관하고 싶은 형태<br>로 기획을 진행하며, 전시 관람 후 자연스럽게 가져가고',
            'modal1.t2.p2': '싶은 대표 굿즈로 제작합니다.',
            'modal1.t3': '행사의 특별함을 높이는<br>한정 굿즈',
            'modal1.t3.p1': '전시 한정판, VIP 증정품, 기념 패키지처럼 행사의 가치<br>를 높이고 특별한 구성과 완성도로 행사의 인상을 더 오<br>래 남깁니다.',
            'modal1.t4': '다양성을 충족시켜줄<br>굿즈 제품군',
            'modal1.t4.p1': '전시의 주제에 부합하는 다양한 굿즈를<br>원스탑으로 제작합니다.',
            'modal1.t4.p2': '여러가지 형태로 전시의 여운을 간직하도록 굿즈의<br>다양성을 보장하도록 여러 굿즈를 기획합니다.',
            'modal2.t1': '작가의 감도를 살린 굿즈',
            'modal2.t1.p1': '캐릭터, 일러스트, 그래픽의 분위기를 해치지 않고 작가<br>고유의 색감을 담아내며, 작품이 가진 결, 선, 무드를 굿<br>즈의 형태에 맞게 자연스럽게 풀어냅니다.',
            'modal2.t2': '팬이 소장하고 싶은 굿즈',
            'modal2.t2.p1': '단순한 이미지 상품이 아니라 팬들이 간직하고 싶어<br>하는 소장형 굿즈로 기획하고, 작가 마켓, 개인전, 온라',
            'modal2.t2.p2': '인 판매용 상품으로 활용하기 좋은 굿즈를 제작합니다.',
            'modal2.t2.p3': '제품의 완성도를 높여주는 도자기, PVC등 여러 재질을<br>고민하고 최적의 소재와 공법을 사용합니다.',
            'modal2.t3': '개인 브랜드를<br>확장하는 굿즈',
            'modal2.t3.p1': '디자이너의 작업물을 하나의 브랜드 상품으로 확장할<br>수 있도록 구성하며, 첫 굿즈 제작부터 팝업, 마켓, 시리<br>즈 상품까지 연결될 수 있는 방향을 제안합니다.',
            'modal2.t4': '다양성을 충족시켜줄<br>굿즈 제품군',
            'modal2.t4.p1': '작품의 주제에 부합하는 다양한 굿즈를<br>원스텝으로 제작합니다.',
            'modal2.t4.p2': '여러가지 형태로 작품의 여운을 간직하도록 굿즈의<br>다양성을 보장하도록 여러 굿즈를 기획합니다.',
            'modal3.t1': '브랜드 이미지를<br>자연스럽게 남기는 굿즈',
            'modal3.t1.p1': '고객이 일상 속에서 자연스럽게 브랜드를 기억할 수 있도<br>록 기획하고, 브랜드 컬러, 캠페인 메시지, 제품 이미지를<br>굿즈의 형태에 맞게 담아냅니다.',
            'modal3.t2': '실제로 사용하고<br>보관하는 홍보 굿즈',
            'modal3.t2.p1': '받고 버려지는 판촉물이 아니라, 고객이 오래 사용하고<br>보관할 수 있는 굿즈를 목표로 하며, 실용성과 디자인 완<br>성도를 함께 고려해 브랜드 노출 효과를 높입니다.',
            'modal3.t3': '기업 행사와<br>증정 목적에 맞춘 굿즈',
            'modal3.t3.p1': '박람회, 런칭 행사, 기념품, VIP 증정용처럼 목적에 맞는<br>구성을 제안하고, 브랜드의 신뢰감과 완성도를 보여줄<br>수 있는 굿즈로 제작합니다.',
            'modal3.t4': '다양성을 충족시켜줄<br>굿즈 제품군',
            'modal3.t4.p1': '브랜드의 정체성에 부합하는 다양한 굿즈를<br>원스텝으로 제작합니다.',
            'modal3.t4.p2': '여러가지 형태로 브랜드이미지를 전달할수 있도록 다양<br>성을 충족시키는 기획을합니다.',
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
            'about.hero.sub': 'Goods and objects people want to collect—from your work and brand',
            'about.hero.lead1': 'FUNKKY GIZMO is a goods and object production studio',
            'about.hero.lead2': 'that considers eco-friendly materials and sustainable production.',
            'about.hero.btn.product': 'VIEW PRODUCTS',
            'about.hero.btn.contact': 'CONTACT US',
            'about.bridge.title': 'FROM IDEA TO OBJECTS',
            'about.node.funkky.line1': 'Sensory ideas and',
            'about.node.funkky.line2': 'creative planning',
            'about.node.gizmo.line1': 'High finish and',
            'about.node.gizmo.line2': 'refined production',
            'about.connector.top': 'A creative partner connecting art and objects',
            'about.connector.bottom': 'WE TURN IDEAS INTO WELL-CRAFTED OBJECTS.',
            'about.who.p1.line1': 'FUNKKY GIZMO is a goods and object production studio',
            'about.who.p1.line2': 'that turns artists\' and brands\' ideas into goods and objects.',
            'about.who.p2.line1': 'We understand the mood of each work and a brand\'s message,',
            'about.who.p2.line2': 'and consider eco-friendly materials, production methods, and packaging together',
            'about.who.p2.line3': 'to create products that are used for a long time and remain valuable.',
            'about.approach.creative.line1': 'We understand the character of each work and brand, and suggest design directions',
            'about.approach.creative.line2': 'suited to expanding them into products.',
            'about.approach.custom': 'We plan and produce custom products in a wide range of materials.',
            'about.approach.quality.line1': 'We understand and respect artists\' and brands\' identities',
            'about.approach.quality.line2': 'and produce with high quality.',
            'about.approach.sustainable.line1': 'We research eco-friendly materials and sustainable production methods,',
            'about.approach.sustainable.line2': 'and through products that can be used for a long time,',
            'about.approach.sustainable.line3': 'we pursue more responsible production and consumption.',
            'about.studios.line1': 'Based on production networks in Seoul and China,',
            'about.studios.line2': 'FUNKKY GIZMO collaborates with specialists across fields from planning through production',
            'about.studios.line3': 'and operates a stable production system.',
            'about.products.subtitle': 'From materials to process, more responsibly',
            'about.products.body.line1': 'Not simply products that look good,',
            'about.products.body.line2': 'but outcomes that can be used for a long time and remain meaningful.',
            'about.products.btn': 'VIEW PRODUCTS',
            'about.cta.eyebrow': 'CREATE WITH US',
            'about.cta.title': 'Start your goods project with us today',
            'about.cta.line1': 'If you need goods, objects, or packaging production,',
            'about.cta.line2': 'start with FUNKKY GIZMO.',
            'about.cta.btn': 'CONTACT US',
            'about.imagine.line1': 'From planning to production,',
            'about.imagine.line2': 'a trusted partner connecting',
            'about.imagine.line3': 'the value of your work to products',
            'footer.tagline1': 'Connecting art and objects',
            'footer.tagline2': 'Your creative partner',
            'products.headline': 'From artwork to goods and objects, into lasting memories',
            'products.lead': 'FUNKKY GIZMO starts by understanding the identity of the work and brand, then considers materials and production methods together.<br>We create goods and objects that are used for a long time and remain meaningful—not simply merchandise.',
            'products.card.material': 'Materials chosen<br>for each work',
            'products.card.making': 'Production<br>tailored to ideas',
            'products.card.experience': 'Memorable<br>experiences of use',
            'products.card.package': 'High-quality<br>packaging',
            'products.closing.line1': '“ Fixed standards and limited materials—traditional goods production',
            'products.closing.line2': 'is too narrow a framework to capture an artist\'s or brand\'s philosophy.',
            'products.closing.line3': 'FUNKKY GIZMO provides optimal product planning',
            'products.closing.line4': 'and production services that best showcase your work.”',
            'products.modal.1.title': 'Exhibition & Event Goods',
            'products.modal.2.title': 'Designer Custom Goods',
            'products.modal.3.title': 'Brand Promotion Goods',
            'products.tap1.label': 'Exhibition & Event Goods',
            'products.tap1.alt': '01 Exhibition and Event Goods',
            'products.tap2.label': 'Designer Custom Goods',
            'products.tap2.alt': '02 Customized Goods for Designer',
            'products.tap3.label': 'Brand Promotion Goods',
            'products.tap3.alt': '03 Promotion Goods for Brand',
            'products.modal.close': 'Close',
            'modal1.t1': 'Goods that capture<br>exhibition imagery in depth',
            'modal1.t1.p1': 'Goods that visually preserve main exhibition imagery, characters, and atmosphere<br>so the memory of the space lasts longer.',
            'modal1.t1.p2': 'Not simple prints, but forms that make the exhibition atmosphere<br>tangible in your hands.',
            'modal1.t2': 'Goods visitors can<br>collect with ease',
            'modal1.t2.p1': 'Planned in forms that are easy to buy yet worth keeping for a long time,<br>so visitors naturally want to take them home after viewing an exhibition',
            'modal1.t2.p2': 'as representative goods.',
            'modal1.t3': 'Limited goods that elevate<br>special events',
            'modal1.t3.p1': 'Exhibition limited editions, VIP gifts, and commemorative packages that raise the value of an event<br>with special composition and finish that keep the impression alive longer.',
            'modal1.t4': 'A product range<br>that satisfies diversity',
            'modal1.t4.p1': 'We produce a diverse range of goods aligned with exhibition themes<br>in one step.',
            'modal1.t4.p2': 'We plan multiple goods in various forms<br>to preserve the afterglow of an exhibition.',
            'modal2.t1': 'Goods that preserve<br>an artist\'s sensibility',
            'modal2.t1.p1': 'We capture each artist\'s unique color without breaking the mood of characters, illustrations, and graphics,<br>and naturally translate the texture, lines, and mood of a work<br>into forms suited to goods.',
            'modal2.t2': 'Goods fans want to collect',
            'modal2.t2.p1': 'Planned as collectible goods fans want to keep—not simple image merchandise—for artist markets, solo exhibitions, and online',
            'modal2.t2.p2': 'sales.',
            'modal2.t2.p3': 'We consider ceramics, PVC, and other materials<br>to choose the best process and finish.',
            'modal2.t3': 'Goods that expand<br>a personal brand',
            'modal2.t3.p1': 'Structured so a designer\'s work can expand into brand products,<br>with directions that connect from first goods production to pop-ups, markets,<br>and series products.',
            'modal2.t4': 'A product range<br>that satisfies diversity',
            'modal2.t4.p1': 'We produce a diverse range of goods aligned with each work\'s theme<br>in one step.',
            'modal2.t4.p2': 'We plan multiple goods in various forms<br>to preserve the afterglow of a work.',
            'modal3.t1': 'Goods that naturally<br>leave a brand image',
            'modal3.t1.p1': 'Planned so customers can naturally remember a brand in everyday life,<br>with brand colors, campaign messages, and product imagery<br>adapted to the form of goods.',
            'modal3.t2': 'Promotional goods<br>people actually use and keep',
            'modal3.t2.p1': 'Aimed at goods customers can use and keep for a long time—not giveaways that are discarded—<br>balancing practicality and design quality<br>to increase brand exposure.',
            'modal3.t3': 'Goods tailored to<br>corporate events and gifting',
            'modal3.t3.p1': 'We propose compositions suited to trade shows, launch events, commemorative gifts, and VIP giveaways,<br>produced as goods that show a brand\'s credibility<br>and quality.',
            'modal3.t4': 'A product range<br>that satisfies diversity',
            'modal3.t4.p1': 'We produce a diverse range of goods aligned with brand identity<br>in one step.',
            'modal3.t4.p2': 'We plan multiple goods in various forms<br>to deliver brand imagery and satisfy diversity.',
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
    }

    function switchLang(lang) {
        if (lang !== 'ko' && lang !== 'en') return;

        localStorage.setItem(STORAGE_KEY, lang);
        applyTranslations();
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
