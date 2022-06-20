# 카카오 고객센터

## 목차

- [시작하기](#시작하기)
- [기술 스택](#기술-스택)
- [프로젝트 설명](#프로젝트-설명)
  - 메인
  - 도움말
  - 문의하기
  - 관리자 페이지

## 시작하기

- 접속 방법
  - aws: http://15.164.233.23:3001
  - 로컬 접속
    ```
    git clone https://git.xsinc.co.kr/gd.ryu/practice-customer-center.git
    npm install
    npm run build
    node server.js

    # http://127.0.0.1:3001 >> 접속
    ```
- 구현 페이지
  - 메인
    - 접속 시, 첫 번째로 나오는 페이지
  - 도움말
    - 메인 페이지에서, 추천 서비스의 첫 번째 버튼 클릭 시 이동
  - 문의하기
    - 도움말 페이지에서, 왼쪽 카테고리 버튼 클릭 후 하단 문의하기 버튼 클릭 시 이동

## 기술 스택

- 언어
  - HTML
  - CSS
  - JavaScript
- 라이브러리
  - ReactJS
  - SCSS, Styled-Component
  - React Router
  - Redux, Zustand
  - axios

## 프로젝트 설명

카카오 고객센터 클론 코딩  
react-router-dom 이용해 SPA로 제작

<details>
<summary>메인</summary>

```
컴포넌트: /src/comp-root
데이터:
/public/data/
  ├─footer.json
  ├─header.json
  ├─mainAll.json
  ├─mainRecommend.json
  └─sub.json
```
</details>

<details>
<summary>도움말</summary>

```
컴포넌트:
/src/faq
  ├─BreadCrumbs.js
  ├─Detail.js
  └─SideMenu.js
데이터: /public/data/faq.json
```
- 작동 방식

  1. /src/Route/RouteFaq.js에서 react-router-dom의 `useLocation()` hook을 이용해 query string 분석 및 query 변수 선언
      - query string 형태
        `service: 서비스 id category: 카테고리 id platform: 플랫폼 id articleId: 아티클 id`
  2. query 이용, /public/data/faq.json 데이터 추출
    쿼리스트링에
      - service 있을 경우, json의 `service[query.service]`
      - category 있을 경우, json의 `category[query.service][query.category]`
      - platform 있을 경우, json의 `platform[query.service][query.category][query.platform]`
      - articleId 있을 경우, json의 `article[query.service][query.category][query.platform][query.articleId]`
  3. 변경된 데이터 사용
      - React Hook Form, yup 이용해 유효성 검사
      - 국가 코드 선택 시 검색 - 유효성 검사 통과 후 문의 접수 시 원래 페이지로 이동
  4. 버튼(`<Link />`) 클릭 시, query string을 가진 url로 접속하도록 설정
</details>

<details>
<summary>문의하기</summary>

```
컴포넌트: /src/components/Request.js
데이터: /public/data/countryNumber.json
```
</details>

<details>
<summary>관리자 페이지</summary>

```
컴포넌트:
/src/admin/
  ├─admin.js
  │
  ├─Article
  │ ├─Index.js
  │ ├─List.js
  │ └─Cateogry.js
  ├─Editor
  │ ├─Index.js
  │ ├─Preview.js
  │ └─Warning.js
  ├─Nav
  │ └─Index.js
  ├─Qna
  │ ├─Index.js
  │ ├─List.js
  │ ├─Preview.js
  │ └─Editor.js
  ├─ShowRequest.js
  ├─Graph.js
  └─Login.js
데이터: /public/data/faq_temp.json
```
- 접속방법
  1. 메인 페이지에서 로그인 클릭
  2. 로그인 페이지에서 관리자 계정 로그인 (test: admin1/1234)
- 구현 페이지
  - login (로그인)
    - localStorage에 로그인 데이터 저장
  - dashboard (대시보드)
    1. 트래픽 통계 (사용 라이브러리: Chart.js)
    2. 문의 목록
    3. 도움말 통계
    4. 도움말 목록
  - faq (도움말 관리)
    1. 도움말 목록
    2. 도움말 미리보기
    3. 도움말 관리
        - 사용 라이브러리: CKEditor 5
          - [github](https://github.com/ckeditor/ckeditor5)
          - [demo](https://ckeditor.com/ckeditor-5/demo/)
       - 구현 기능
          - 데이터 변경 시 적용
          - 저장하기 버튼: 콘솔창에서 데이터 확인 가능
    4. 카테고리 관리
        - 사용 라이브러리: React Sortable Tree
           - [github](https://github.com/frontend-collective/react-sortable-tree)
           - [demo](https://frontend-collective.github.io/react-sortable-tree/)
        - 구현 기능
           - 카테고리 `검색`, `추가`, `삭제`, `이동`, `이름 변경`, `정보 확인`
  - qna (문의 관리)
    1. 문의 관리
    2. 문의 목록
         - 문의 글 상태 확인 (답변 대기, 답변 완료)
    3. 문의 미리보기
    4. 문의 관리
          - 사용 라이브러리: CKEditor 5
          - 저장하기 버튼
            - 클릭 시: 데이터 변경
</details>
