import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

import useStore from "../../store/store";

const array = ["트래픽 통계", "데이터 통계", "글 수정하기", "최근 문의 글"];

const Nav = forwardRef(({ params }, scrollRef) => {
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
                {array.map((content, index) => (
                    <li
                        onClick={() =>
                            scrollRef.current[index].scrollIntoView()
                        }
                    >
                        {content}
                    </li>
                ))}
            </ul>
        </div>
    );
});

export default Nav;
