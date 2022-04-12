# 카카오 고객센터

## 목차

-   [시작하기](#시작하기)
-   [기술 스택](#기술-스택)
-   [프로젝트 설명](#프로젝트-설명)
    -   [메인](#메인)
    -   [카카오톡 고객센터](#카카오-고객센터)
    -   [문의하기](#문의하기)
    -   [관리자 페이지](#관리자-페이지)

## 시작하기

-   접속 방법

    -   aws: http://15.164.233.23:3001
    -   로컬 접속

        ```
        git clone https://git.xsinc.co.kr/gd.ryu/practice-customer-center.git
        npm install
        npm run build
        node server.js

        http://127.0.0.1:3001 >> 접속
        ```

-   구현 페이지
    -   메인
        -   접속 시, 첫 번째로 나오는 페이지
    -   카카오톡 고객센터
        -   메인 페이지에서, 추천 서비스의 첫 번째 버튼 클릭 시 이동
    -   문의하기
        -   카카오톡 고객센터 페이지에서, 왼쪽 카테고리 버튼 클릭 후 하단 문의하기 버튼 클릭 시 이동

## 기술 스택

-   언어
    -   JavaScript
-   라이브러리
    -   ReactJS
    -   SCSS, Styled-Component
    -   react-router-dom
    -   ~~Redux, zustand~~
    -   axios
    -   React Hook Form, yup
-   웹 서버
    -   ExpressJS

## 프로젝트 설명

카카오 고객센터 클론 코딩  
react-router-dom 이용해 SPA로 제작

-   ### 메인
    ```
    컴포넌트: /src/comp-root
    데이터:
    /public/data/footer.json
    /public/data/header.json
    /public/data/mainAll.json
    /public/data/mainRecommend.json
    /public/data/sub.json
    ```
-   ### 카카오톡 고객센터
    ```
    컴포넌트: /src/faq
    데이터: /public/data/faq.json
    데이터 형태:
    {
        service: [data],
        category: [[data]],
        platform: [[[data]]],
        article: [[[[data]]]],
    }
    ```
    -   작동 방식
        1. /src/Route/RouteFaq.js에서 react-router-dom의 useLocation() hook을 이용해 query string 분석 및 query 변수 선언
            - query string 형태
                ```
                {
                    service: number,
                    category: number,
                    platform: number,
                    articleId: number,
                }
                ```
        2. query이용해서 /public/data/faq.json 데이터 추출
            - 쿼리스트링에
                - service 있을 경우, json의 service[query.service]
                - category 있을 경우, json의 category[query.service][query.category]
                - platform 있을 경우, json의 platform[query.service][query.category][query.platform]
                - articleId 있을 경우, json의 article[query.service][query.category][query.platform][query.articleid]
        3. 변경된 데이터 사용
            - 사용 컴포넌트
                ```
                /src/faq/BreadCrumbs.js
                /src/faq/SideMenu.js
                /src/faq/Detail.js
                ```
            - React Hook Form, yup 이용해 유효성 검사
            - 국가 코드 선택 시 검색
            - 유효성 검사 통과 후 문의 접수 시 원래 페이지로 이동
        4. 버튼(<Link />) 클릭 시, query string을 가진 url로 접속하도록 설정함
-   ### 문의하기
    ```
    컴포넌트: /src/components/Request.js
    데이터: /public/data/countryNumber.json
    ```
-   ### 관리자 페이지

    ```
    접속방법

    1) 메인 페이지에서 로그인 클릭
    2) 로그인 페이지에서 { id: admin, pw: admin } 작성 후 로그인
    ```

    ```
    컴포넌트: src/admin/
    admin.js
    Login.js
    데이터: /public/data/faq_temp.json
    데이터 형태:
        {
            "service":[{"service_id":1,"content": "카카오톡"}],
            "category":[{"service_id":1,"category_id":1,"content": "일반"}],
            "platform":[{
                "service_id":1,"category_id":1,
                "platform_id":1,"content": "안드로이드"
            }],
            "article":[{
                "service_id":1, "category_id":1,
                "platform_id":1, "article_id":1,
                "content": "1. 휴대폰 설정에서"
            }]
        }
    ```

    #### 구현 기능

         -   로그인
         -   로그아웃
         -   옵션 설정
         -   옵션 추가
         -   옵션 제거
         -   옵션 별 데이터 상태 설명
