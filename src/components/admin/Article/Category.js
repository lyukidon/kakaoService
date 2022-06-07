import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const data = {
    service: [
        {
            id: 1,
            content: "카카오톡",
        },
        {
            id: 2,
            content: "카카오계정",
        },
        {
            id: 3,
            content: "카카오 이모티콘",
        },
    ],
    category: [
        {
            id:1,
            service_id: 1,
            content: "일반",
        },
        {
            id:2,
            service_id: 1,
            content: "가입, 변경, 탈퇴",
        },
        {
            id:3,
            service_id:2,
            content: "로그인"
        },
        {
            id:4,
            service_id:2,
            content: "아이디, 비밀번호 찾기",
        }
    ],
    platform: [
        {
            id:1,
            category_id: 1,
            content: "안드로이드"
        },
        {
            id:2,
            category_id: 1,
            content: "iOS"
        },
        {
            id:3,
            category_id: 1,
            content: "Windows"
        },
    ]
};

export default ({ onToggleSetting }) => {
    return (
        <div
            className="settingCategory"
            role="button"
            tabIndex={0}
            onClick={() => {
                onToggleSetting(false);
            }}
        >
            <div className="settingModal">
                <button
                    type="button"
                    onClick={() => {
                        onToggleSetting(false);
                    }}
                >
                    <FontAwesomeIcon icon="fa-solid fa-x" />
                </button>
            </div>
        </div>
    );
};
