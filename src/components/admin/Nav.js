import React from "react";
import { useNavigate } from "react-router-dom";

import useStore from "../../store/store";

function Nav({ params }) {
    const navigate = useNavigate();
    const { toggleLogin } = useStore();
    return (
        <div className="welcome">
            <div>
                <button
                    type="button"
                    className="featBtn"
                    onClick={() => {
                        navigate("/");
                        toggleLogin();
                    }}
                >
                    로그 아웃
                </button>
                <button className="featBtn" type="button">
                    홈
                </button>
            </div>
            <div>
                <div className="profile inlineBlock">A</div>
                <div className="inlineBlock">닉네임: {params.id}</div>
            </div>

            <ul className="nav">
                <li>트래픽 통계</li>
                <li>데이터 통계</li>
                <li>글 수정하기</li>
                <li>최근 문의글</li>
            </ul>
        </div>
    );
}

export default Nav;
