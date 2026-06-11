# FUNKKY GIZMO (펑키기즈모)

디자인·굿즈 스튜디오 **소개·포트폴리오 사이트**입니다.

## 배포 방향 (현재)

| 항목 | 선택 |
|------|------|
| **공개 사이트** | `docs/` → **GitHub Pages** (무료) |
| **문의** | **Google Form** |
| **도메인** | 가비아 등에서 구매 후 연결 |

로컬 개발용 **Spring Boot + JSP** (`src/`)는 그대로 두었습니다.  
**인터넷에 올릴 버전은 `docs/` 폴더**를 사용하세요.

---

## 빠른 시작 (무료 배포)

### 1) Google Form 만들기

→ **[docs/GOOGLE-FORM-SETUP.md](docs/GOOGLE-FORM-SETUP.md)** 참고

### 2) 폼 URL 연결

`docs/js/config.js`에 구글 폼 링크 입력

### 3) GitHub Pages

Repository: **https://github.com/plusnsw/funkkygizmo**

```bash
cd c:\test_p
git init
git add docs/ scripts/ README.md .gitignore
git commit -m "Add FUNKKY GIZMO site"
git branch -M main
git remote add origin https://github.com/plusnsw/funkkygizmo.git
git push -u origin main
```

Repository → **Settings → Pages** → Folder: **`/docs`**

미리보기: **https://plusnsw.github.io/funkkygizmo/**

### 4) 도메인 (구입 후)

→ **[docs/DOMAIN-SETUP.md](docs/DOMAIN-SETUP.md)** 참고

---

## 로컬에서 Java 버전 실행 (선택)

```powershell
cd c:\test_p
.\gradlew.bat bootRun
```

http://localhost:8080 — JSP + Gmail SMTP 문의 (개발/테스트용)

---

## 페이지 (`docs/` 기준)

| 파일 | 설명 |
|------|------|
| `index.html` | 메인 |
| `about.html` | 소개 |
| `products/` | Objects 포트폴리오 |
| `team.html` | 팀 |
| `contact.html` | 문의 (Google Form) |

## JSP 수정 후 정적 사이트 다시 생성

```bash
node scripts/build-github-pages.mjs
```

(`docs/js/config.js`는 기존 파일이 있으면 유지됩니다.)

---

## 문서

- [docs/GITHUB-PAGES.md](docs/GITHUB-PAGES.md) — GitHub Pages 배포
- [docs/GOOGLE-FORM-SETUP.md](docs/GOOGLE-FORM-SETUP.md) — 구글 폼 설정
- [docs/DOMAIN-SETUP.md](docs/DOMAIN-SETUP.md) — 도메인 연결
