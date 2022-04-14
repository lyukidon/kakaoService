import React, { forwardRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import useStore from "../../store/store";

const array = ["트래픽 통계", "데이터 통계", "글 수정하기", "최근 문의 글"];

const Nav = forwardRef(({ params }, scrollRef) => {
    const navigate = useNavigate();
    const { toggleLogin } = useStore();
    return (
        <>
            <div className="top">
                <Link className="gohome" type="button" to="/">
                    카카오 홈
                </Link>
                <button
                    type="button"
                    className="right"
                    onClick={() => {
                        navigate("/");
                        toggleLogin();
                    }}
                >
                    로그 아웃
                </button>
                <div className="right inlineBlock">
                    {params.id} 님, 환영합니다
                </div>
            </div>
            <div className="nav">
                <div>바로가기</div>
                <ul>
                    {array.map((content, index) => (
                        <li
                            role="none"
                            tabIndex={index}
                            key={content}
                            onClick={() =>
                                scrollRef.current[index].scrollIntoView(true)
                            }
                            onKeyDown={() =>
                                scrollRef.current[index].scrollIntoView()
                            }
                        >
                            {content}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
});
Nav.displayName = "Nav";

export default Nav;
