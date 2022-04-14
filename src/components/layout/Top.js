import React from "react";
import { Link } from "react-router-dom";

import "../../scss/main/Top.scss";

import useStore from "../../store/store";

function Top() {
    const { ...store } = useStore();

    return (
        <div className="Top common-width">
            <select name="lang">
                <option value="KOR">한국어</option>
                <option value="ENG">English</option>
            </select>
            <span>
                {store.login ? (
                    <>
                        <span className="userName">{store.userName}님</span>
                        <Link
                            className="logout"
                            to="/"
                            onClick={() => {
                                store.toggleLogin();
                                store.setUserName("");
                            }}
                        >
                            로그아웃
                        </Link>
                        <Link
                            className="logout"
                            to={`/admin/${store.userName}`}
                        >
                            관리자 페이지
                        </Link>
                    </>
                ) : (
                    <Link to="/admin/login">로그인</Link>
                )}
            </span>
        </div>
    );
}

export default Top;
