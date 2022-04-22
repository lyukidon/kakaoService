import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

const array = ["트래픽 통계", "최근 문의", "데이터 통계", "데이터 변경"];

const TopNav = () => (
    <div className="topNav">
        <Link className="gohome" type="button" to="/">
            {`< 고객센터 홈`}
        </Link>
        <div className="right">
            {window.localStorage.getItem("userId")} 님, 환영합니다
        </div>
        <Link
            to="/"
            className="right"
            onClick={() => window.localStorage.removeItem("userId")}
        >
            로그아웃
        </Link>
    </div>
);

const SideNav = forwardRef((props, scrollRef) => (
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
));
SideNav.displayName = "SideNav";

export { TopNav, SideNav };
