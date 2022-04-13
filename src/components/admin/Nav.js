import React from "react";

function Nav({ params }) {
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
                <li>통계</li>
                <li>글 수정하기</li>
            </ul>
            <div className="inlineBlock"></div>
        </div>
    );
}

export default Nav;
