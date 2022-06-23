import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../scss/main/Header.scss";

function Header() {
    const [headerData, setHeaderData] = useState([]);
    useEffect(() => {
        axios
            .get("/data/header.json")
            .then((res) => setHeaderData(res.data))
    }, []);
    return (
        <header className="common-width">
            <Link className="PageTitle" to="/">kakao 고객센터</Link>
            <form className="searchBox">
                <input
                    type="text"
                    placeholder="궁금한 점이 있다면 도움말을 검색해보세요"
                />
                <button type="submit" className="searchIcon">
                    <span className="submitType">검색</span>
                </button>
                <div>
                    {headerData.map((headerdata) => (
                        <span key={headerdata.id}>
                            <a className="recommend" href="#;">
                                {headerdata.title}
                            </a>
                        </span>
                    ))}
                </div>
            </form>
        </header>
    );
}

export default Header;
