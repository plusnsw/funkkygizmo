# funkkygizmo.com 도메인 연결

**목표:** `https://funkkygizmo.com` 접속 → 메인 페이지 (`index.html`)

호스팅 파일은 **GitHub Pages (`docs/` 폴더)** 에 올립니다.  
가비아에서 산 **도메인 DNS만** GitHub로 연결하면 됩니다. (가비아 PHP/Java 호스팅은 사용 안 함)

---

## 1단계 — GitHub에 사이트 올리기

아직 GitHub 저장소가 없다면:

1. Repository: **https://github.com/plusnsw/funkkygizmo** (Private)
2. 이 프로젝트를 push:

```bash
cd c:\test_p
git init
git add docs/ scripts/ README.md .gitignore
git commit -m "Add FUNKKY GIZMO site for GitHub Pages"
git branch -M main
git remote add origin https://github.com/plusnsw/funkkygizmo.git
git push -u origin main
```

3. Repository → **Settings → Pages**
   - **Source:** Deploy from a branch
   - **Branch:** `main` / **`/docs`**
   - **Save**

4. 같은 화면 **Custom domain**에 입력:

```
funkkygizmo.com
```

5. **Enforce HTTPS** 체크 (DNS 반영 후 몇 분~24시간 뒤 가능)

6. (권장) **www** 도메인도 추가:

```
www.funkkygizmo.com
```

`docs/CNAME` 파일에 `funkkygizmo.com` 이 이미 들어 있습니다.

---

## 2단계 — 가비아 DNS 설정

**My가비아 → 도메인 → funkkygizmo.com → DNS 관리**

기존 **가비아 웹호스팅용 A/CNAME** 이 있으면 삭제하거나 GitHub용으로 **교체**하세요.

### 루트 도메인 (`funkkygizmo.com`)

| 타입 | 호스트 | 값 / IP |
|------|--------|---------|
| **A** | `@` | `185.199.108.153` |
| **A** | `@` | `185.199.109.153` |
| **A** | `@` | `185.199.110.153` |
| **A** | `@` | `185.199.111.153` |

### www (`www.funkkygizmo.com`) — 권장

| 타입 | 호스트 | 값 |
|------|--------|-----|
| **CNAME** | `www` | `plusnsw.github.io` |

> GitHub 아이디: **plusnsw** / 레포: **funkkygizmo**

---

## 3단계 — 확인

1. DNS 저장 후 **10분~48시간** 대기 (보통 1~2시간 내)
2. 브라우저에서 `https://funkkygizmo.com` 접속
3. **WHERE ART MEETS OBJECT** 메인 페이지가 보이면 성공

임시 확인 (DNS 전):  
**https://plusnsw.github.io/funkkygizmo/**

---

## 자주 하는 실수

| 문제 | 해결 |
|------|------|
| 가비아 기본 호스팅 페이지만 보임 | DNS가 가비아 서버를 가리킴 → 위 **A 레코드 4개**로 변경 |
| GitHub Pages 404 | Settings → Pages에서 **`/docs`** 폴더 선택했는지 확인 |
| HTTPS 안 됨 | Custom domain 저장 후 **Enforce HTTPS** 다시 시도 (DNS 전파 후) |
| www만 되고 루트 안 됨 | `@` A 레코드 4개 추가 |

---

## 문의 (Contact)

도메인 연결과 별개로 Google Form URL은 `docs/js/config.js` 에 등록하세요.  
→ [GOOGLE-FORM-SETUP.md](./GOOGLE-FORM-SETUP.md)
