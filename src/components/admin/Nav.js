import React, { forwardRef } from "react";
import { useNavigate, Link } from "react-router-dom";

import useStore from "../../store/store";

const array = ["트래픽 통계", "데이터 통계", "글 수정하기", "최근 문의 글"];

const SideNav = () => {
    const navigate = useNavigate();
    const { toggleLogin, userName } = useStore();
    return(
        <div className="topNav">
                <Link className="gohome" type="button" to="/">
                    고객센터 홈
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
                    {userName} 님, 환영합니다
                </div>
            </div>
    )
}

const TopNav = forwardRef((props, scrollRef) => {
    return (
        <>
            
            <div className="sideNav">
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
TopNav.displayName = "TopNav";

export {TopNav, SideNav};
