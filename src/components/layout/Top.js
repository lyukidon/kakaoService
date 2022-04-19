import React from "react";
import { Link } from "react-router-dom";

import "../../scss/main/Top.scss";

function Top() {
    return (
        <div className="Top common-width">
            <select name="lang">
                <option value="KOR">한국어</option>
                <option value="ENG">English</option>
            </select>
            <span>
                    <Link to="/admin">관리자 페이지</Link>
            </span>
        </div>
    );
}

export default Top;
