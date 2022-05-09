import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavData from "./NavData";

const TopNav = () => (
    <div className="topNav">
        <div className="leftTopNav">
            <div>
                <FontAwesomeIcon
                    className="sideNavIcon"
                    icon="fa-solid fa-circle-user"
                    size="lg"
                />
                {window.localStorage.getItem("userId")}
            </div>
        </div>
        <div>관리자 페이지</div>
        <div className="rightTopNav">
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
            <div>
                {NavData.map((content, index) => (
                    <div
                        role="none"
                        tabIndex={index}
                        key={content.id}
                        onClick={() => navigate(content.url)}
                    >
                        <FontAwesomeIcon
                            className="sideNavIcon"
                            icon={content.icon}
                        />
                        {content.title}
                    </div>
                ))}
            </div>
            <div>
                <div>
                    <Link className="goMain" to="/">
                        <FontAwesomeIcon
                            className="sideNavIcon"
                            icon="fa-solid fa-house-chimney"
                        />
                        고객센터
                    </Link>
                </div>
                <div>
                    <Link className="goDash" to="/admin/dashboard">
                        <FontAwesomeIcon
                            className="sideNavIcon"
                            icon="fa-solid fa-table"
                        />
                        대쉬보드
                    </Link>
                </div>
            </div>
        </div>
    );
}
SideNav.displayName = "SideNav";

export { TopNav, SideNav };
