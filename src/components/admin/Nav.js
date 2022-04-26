import React from "react";
import { Link, useNavigate } from "react-router-dom";

const array = [
    {
        id:1,
        title: "트래픽 통계",
        url: "/admin/statics"
    },
    {
        id:2,
        title:"최근 문의",
        url: "/admin/lastRequest"
    },
    {
        id:3,
        title: "데이터 통계",
        url: '/admin'
        
    },
    {
        id:4,
        title: "데이터 변경",
        url: "/admin/edit"
    },
];

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

function SideNav() {
    const navigate = useNavigate();
    return (
        <div className="sideNav">
            <div>바로가기</div>
            <ul>
                {array.map((content, index) => (
                    <li
                        role="none"
                        tabIndex={index}
                        key={content.id}
                        onClick={() => navigate(content.url)}
                    >
                        {content.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
SideNav.displayName = "SideNav";

export { TopNav, SideNav };
