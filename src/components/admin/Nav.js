import React from "react";
import { Link, useNavigate } from "react-router-dom";

const array = [
    {
        id: 1,
        title: "트래픽 통계",
        url: "/admin/statics",
    },
    {
        id: 2,
        title: "최근 문의",
        url: "/admin/lastRequest",
    },
    {
        id: 3,
        title: "데이터 통계",
        url: "/admin",
    },
    {
        id: 4,
        title: "데이터 변경",
        url: "/admin/edit",
    },
];

const TopNav = () => (
    <div className="topNav">
        <div className="leftTopNav">
            <Link className="goMain" to="/">
                👩‍🚀고객센터
            </Link>
            <Link className="goDash" to="/admin/dashboard">
                🏠대시보드
            </Link>
        </div>
        <div>관리자 페이지</div>
        <div className="rightTopNav">
            <span>
                <em>아이디: {window.localStorage.getItem("userId")}</em>
            </span>
            <Link
                to="/"
                onClick={() => window.localStorage.removeItem("userId")}
            >
                로그아웃🔒
            </Link>
        </div>
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
