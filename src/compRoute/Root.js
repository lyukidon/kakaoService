import React from "react";
import Notice from "../comp-root/Notice";
import Main from '../comp-root/Main'
import Sub from '../comp-root/Sub'
import Footer from '../comp-root/Footer'

function Root() {
  return (
    <div className='app'>
        <Notice 
            title='공지사항'
            content='[조치 완료 안내] 일부 카카오톡 로그인 실패/메시지 수신이 원활하지 않은 현상'
        />
        <Main />
        <Sub />
        <Footer />
    </div>
  );
}

export default Root;
