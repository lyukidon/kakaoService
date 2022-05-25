import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavData from "./NavData";

const TopNav = () => (
    <div className="topNav">
        <Link to="/admin/dashboard">관리자 페이지</Link>
        <div>
            <div className="user">
                <FontAwesomeIcon
                    className="sideNavIcon"
                    icon="fa-solid fa-circle-user"
                    size="lg"
                />
                {window.localStorage.getItem("userId")}
            </div>
            <div className="logout">
                <Link
                    to="/"
                    onClick={() => window.localStorage.removeItem("userId")}
                >
                    로그아웃
                </Link>
            </div>
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
                            icon="fa-solid fa-arrow-right-from-bracket"
                        />
                        고객센터
                    </Link>
                </div>
            </div>
        </div>
    );
}
SideNav.displayName = "SideNav";

export { TopNav, SideNav };
