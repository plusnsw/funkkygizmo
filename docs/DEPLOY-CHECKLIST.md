# 배포 체크리스트 (plusnsw/funkkygizmo)

## ✅ 로컬에서 완료됨

- [x] `docs/` 정적 사이트
- [x] `docs/CNAME` → `funkkygizmo.com`
- [x] Git commit 완료 (로컬)

## ⏳ 본인 PC에서 1회 (GitHub 로그인)

PowerShell:

```powershell
cd c:\test_p
.\deploy-push.ps1
```

또는:

```powershell
git push -u origin main
```

→ GitHub 로그인 창이 뜨면 **plusnsw** 계정으로 승인

## ⏳ GitHub 웹 (push 후)

1. https://github.com/plusnsw/funkkygizmo/settings/pages
2. **Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: **main** / **/docs**
3. **Custom domain:** `funkkygizmo.com` 입력 → Save
4. **Enforce HTTPS** 체크 (DNS 후)

미리보기: https://plusnsw.github.io/funkkygizmo/

## ⏳ 가비아 DNS

| 타입 | 호스트 | 값 |
|------|--------|-----|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | plusnsw.github.io |

## ⏳ Google Form (문의)

`docs/js/config.js`에 폼 URL 등록 → 다시 push
