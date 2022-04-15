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
                    <Link className="logout" to={`/admin/${store.userName}`}>
                        관리자 페이지
                    </Link>
                ) : (
                    <Link to="/admin/login">관리자 페이지</Link>
                )}
            </span>
        </div>
    );
}

export default Top;
