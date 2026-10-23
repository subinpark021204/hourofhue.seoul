# HUE — hourofhue.seoul

HUE의 서울 다섯 시간 티 컬렉션을 소개하는 정적 웹사이트입니다.

## 페이지

- `index.html` — 브랜드 스토리, 스크롤 패키지 컬렉션, 티 리추얼, 첫 블렌드 알림 신청
- `shop.html` — 다섯 블렌드의 재료 중심 컬렉션 페이지
- `product.html?blend=bukchon` — 다섯 블렌드 공용 상세 페이지
- `result.html` — 신청 완료 및 교육용 페이지 안내

## 로컬 미리보기

```bash
python3 -m http.server 4173
```

브라우저에서 `http://localhost:4173`을 엽니다. 별도의 빌드 과정이나 외부 패키지가 필요하지 않습니다.

## 제품 상세 URL

- `product.html?blend=bukchon`
- `product.html?blend=seochon`
- `product.html?blend=seongsu`
- `product.html?blend=yeonnam`
- `product.html?blend=haebangchon`

마우스 포인터가 있는 환경에서는 링크와 제품 영역 위에 HUE 전용 커서가 표시됩니다. 터치 환경에서는 기본 터치 인터랙션을 유지합니다.

신청 폼은 교육용입니다. 입력 정보는 서버로 전송하거나 저장하지 않으며, 동의 후 입력값을 지우고 완료 페이지로 이동합니다.

## 개인정보 안내

현재 신청 폼은 입력값을 어디에도 보내지 않습니다. 나중에 Make, Google Sheets, 이메일 등 실제 수집 시스템을 연결할 경우에는 개인정보 안내를 실제 수집 항목, 목적, 보관 기간과 파기 방법에 맞게 반드시 수정해야 합니다.
