import React from "react";
import { Link, useParams } from "react-router-dom";

import "../../scss/main/Top.scss";

function Top() {
    const params = useParams();

    return (
        <div className="Top common-width">
            <select name="lang">
                <option value="KOR">한국어</option>
                <option value="ENG">English</option>
            </select>
            <span>
                <Link to="/admin/login">
                    {params.id ? "로그아웃" : "로그인"}
                </Link>
            </span>
        </div>
    );
}

export default Top;
