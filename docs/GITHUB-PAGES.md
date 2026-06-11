# GitHub Pages 배포 (FUNKKY GIZMO)

## 1. 정적 사이트 다시 만들기 (JSP 수정 후)

```bash
node scripts/build-github-pages.mjs
```

## 2. Google Form 연결

1. [Google Forms](https://forms.google.com)에서 문의 양식 생성
2. **보내기** → **링크** 복사
3. `docs/js/config.js`에서 `REPLACE_WITH_YOUR_FORM_ID`를 실제 Form ID로 교체

```javascript
window.SITE_CONFIG = {
  googleFormUrl: 'https://docs.google.com/forms/d/e/여기에ID/viewform',
  googleFormEmbedUrl: 'https://docs.google.com/forms/d/e/여기에ID/viewform?embedded=true'
};
```

4. 다시 `node scripts/build-github-pages.mjs` 실행 (config.js는 빌드 시 덮어쓰지 않도록 수정했으면 config만 직접 편집)

> **참고:** 빌드 스크립트는 `config.js`를 매번 새로 씁니다. Form URL 설정 후에는 `docs/js/config.js`만 직접 수정하거나, `scripts/build-github-pages.mjs` 상단의 URL을 바꾸세요.

## 3. GitHub에 올리기

```bash
git add docs/
git commit -m "Add GitHub Pages static site"
git push
```

## 4. GitHub Pages 켜기

Repository → **Settings** → **Pages**

- **Source**: Deploy from a branch
- **Branch**: `main` (또는 사용 중인 브랜치)
- **Folder**: `/docs`

저장 후 **https://plusnsw.github.io/funkkygizmo/** 에서 확인

## 5. 도메인 연결

**도메인:** `funkkygizmo.com` (`docs/CNAME` 설정 완료)

가비아 DNS + GitHub Pages 연결 방법 → **[DOMAIN-SETUP.md](./DOMAIN-SETUP.md)**

## Java 버전 vs 정적 버전

| | `src/` (Spring Boot) | `docs/` (GitHub Pages) |
|---|---------------------|------------------------|
| 호스팅 | VPS / Java 컨테이너 | **무료** GitHub Pages |
| 문의 | Gmail SMTP | **Google Form** |
| 수정 | JSP + Java | HTML + `build-github-pages.mjs` |
