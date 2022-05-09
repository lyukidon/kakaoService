import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavData from "./NavData";

const TopNav = () => (
    <div className="topNav">
        <div className="leftTopNav">
            <Link className="goMain" to="/">
                <FontAwesomeIcon icon="fa-solid fa-headset" />
                고객센터
            </Link>
            <Link className="goDash" to="/admin/dashboard">
                <FontAwesomeIcon icon="fa-solid fa-chart-line" />
                대시보드
            </Link>
        </div>
        <div>관리자 페이지</div>
        <div className="rightTopNav">
            <span>
                <em>
                    <FontAwesomeIcon icon="fa-solid fa-circle-user" />{" "}
                    {window.localStorage.getItem("userId")}
                </em>
            </span>
            <Link
                to="/"
                onClick={() => window.localStorage.removeItem("userId")}
            >
                로그아웃
                <FontAwesomeIcon icon="fa-solid fa-lock" />
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
                {NavData.map((content, index) => (
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
