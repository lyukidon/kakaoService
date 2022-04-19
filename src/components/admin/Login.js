import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../scss/admin/login.scss";

function Login({ setUsername }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("/data/users.json").then((res) => setUsers([...res.data]));
    }, []);

    const [input, setInput] = useState({
        username: "",
        password: "",
    });

    const onChangeInput = (event) => {
        const { name, value } = event.target;
        setInput({
            ...input,
            [name]: value,
        });
    };

    // 버튼으로 Link to 기능 사용하기 => useNavigate Hook
    const navigate = useNavigate();
    const onLogin = (object) => {
        const temp = users.filter(
            (data) => data.username === object.username
        )[0];
        if (temp) {
            if (temp.password === object.password) {
                setUsername(object.username)
                navigate(`/admin`, { replace: true });
            }
        }
    };
    return (
        <form className="loginForm">
            <div className="companyName">카카오</div>
            <div className="loginDiv">
                아이디
                <input
                    type="text"
                    name="username"
                    placeholder="입력해주세요"
                    onChange={onChangeInput}
                />
            </div>
            <div className="loginDiv">
                비밀번호
                <input
                    type="password"
                    name="password"
                    placeholder="입력해주세요"
                    onChange={onChangeInput}
                />
            </div>
            <div>
                <button
                    type="submit"
                    onClick={() => {
                        onLogin(input);
                    }}
                >
                    로그인
                </button>
            </div>
        </form>
    );
}

export default Login;
