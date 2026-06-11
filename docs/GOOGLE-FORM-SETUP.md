# Google Form 문의 설정

무료 배포(GitHub Pages)에서는 **문의하기 = Google Form** 입니다.

## 1. 양식 만들기

1. [Google Forms](https://forms.google.com) 접속 (Gmail `funkkygizmo.mari@gmail.com` 권장)
2. **빈 양식** 생성
3. 제목 예: `FUNKKY GIZMO — 작업 문의`
4. 질문 추가 (예시):

| 질문 | 유형 |
|------|------|
| 이름 | 단답형, 필수 |
| 이메일 | 단답형, 필수 |
| 브랜드 / 팀명 | 단답형 |
| 문의 유형 | 객관식 (브랜딩·굿즈·일러스트·팝업·콜라보·기타) |
| 프로젝트 설명 | 장문형, 필수 |

## 2. 응답 받기

1. 양식 상단 **응답** 탭
2. **스프레드시트에 연결** (선택) — Google 시트에 모음
3. **설정(톱니)** → **응답** → **이메일 알림 받기** 켜기  
   → 새 문의 시 `funkkygizmo.mari@gmail.com` 으로 알림

## 3. 링크 복사

1. **보내기** → **링크** 탭
2. URL 복사 (형식 예시):

```
https://docs.google.com/forms/d/e/1FAIpQLSdxxxxxxxx/viewform
```

## 4. 사이트에 연결

`docs/js/config.js` 수정:

```javascript
window.SITE_CONFIG = {
  googleFormUrl: 'https://docs.google.com/forms/d/e/여기실제ID/viewform',
  googleFormEmbedUrl: 'https://docs.google.com/forms/d/e/여기실제ID/viewform?embedded=true'
};
```

- `여기실제ID` = URL에 있는 `/d/e/` 와 `/viewform` 사이 문자열
- 두 줄 모두 **같은 ID** 사용
- embed URL 끝에 `?embedded=true` 붙이기

## 5. 확인

1. `contact.html`을 브라우저로 열거나 GitHub Pages에 배포
2. **Google Form으로 문의하기** 버튼 동작 확인
3. 아래에 **폼이 페이지 안에** 보이면 성공

## 문제 해결

| 증상 | 확인 |
|------|------|
| 버튼만 있고 폼 안 보임 | `googleFormEmbedUrl`에 `?embedded=true` 있는지 |
| 설정 안내 문구만 보임 | `REPLACE_WITH_YOUR_FORM_ID`를 아직 안 바꾼 상태 |
| 응답 메일 안 옴 | Google Form → 설정 → 이메일 알림 |
