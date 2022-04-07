import React from "react";
import { Helmet } from "react-helmet";
import Top from "../components/main/Top";
import Header from "../components/main/Header";
import Notice from "../components/main/Notice";
import Main from "../components/main/Main";
import Sub from "../components/main/Sub";

function RouteMain() {
    return (
        <div className="app">
            <Helmet>
                <title>고객센터 | 카카오 고객센터</title>
            </Helmet>
            <Top />
            <Header />
            <Notice
                title="공지사항"
                content="[조치 완료 안내] 일부 카카오톡 로그인 실패/메시지 수신이 원활하지 않은 현상"
            />
            <Main />
            <Sub />
        </div>
    );
}

export default RouteMain;
