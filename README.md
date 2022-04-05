## 카카오 고객센터
----------------------------
### 기술스텍
- 언어
    - JavaScript
- 라이브러리
    - ReactJS
    - react-router-dom
    - Styled-Component
    - Redux
    - Axios
    - React Hook Form, yup
- 웹 서버
    - expressJS
    - aws ec2
-----------------------------
### 페이지 구성
- 초기화면
- 카카오톡
- 문의하기
----------------------------
### 페이지 동작
- 초기화면
        
        - 컴포넌트: /src/comp-root
        - 데이터: /public/data
    - 검색 | 공지사항 | 추천 | 계정관리 칸 별로 나누어 작성
    - 서비스 전체보기 클릭 시 전체 서비스 렌더링
    - 주요 서비스 중 카카오톡 서비스 페이지 구현
- 카카오톡

        - 컴포넌트: /src/faq
        - 데이터: /public/data/faq.json

        - 사이트 이동 경로: /src/faq/BreadCrumbs.js
        - 좌측 카테고리 메뉴: /src/faq/SideMenu.js
        - 우측 설명: /src/faq/Detail.js

    - 유용한 도움말
    
          - 데이터 랜덤 추출
          - 유용한 도움말 클릭 시 해당 페이지로 이동 및 해당 위치 자동 스크롤
    - 카테고리 별 페이지

            쿼리스트링: 서비스, 카테고리, 플랫폼(OS), Article
            쿼리 스트링
                - /public/data/faq.json에서 데이터 추출 후 렌더링
                - 쿼리스트링 변경 시 useLocation(react-router-dom 라이브러리) 이용해 감지
                - 사이트 이동 경로, 카테고리 메뉴, 설명 페이지의 데이터 변경 후 렌더링 
- 문의하기
        
        컴포넌트: /src/comp-request
        데이터: /data/countryCode.json
    - React Hook Form, yup 이용해 유효성 검사
    - 국가 코드 선택 시 검색
    - 유효성 검사 통과 후 문의 접수 시 원래 페이지로 이동

### 접속
- [http://15.164.233.23:3001](http://15.164.233.23:3001)
        