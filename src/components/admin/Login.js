import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useStore from "../../store/store";

function Login() {
    const { setLogin, setNum } = useStore((state) => state);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("/data/users.json").then((res) => setUsers([...res.data]));
    }, []);

    const [input, setInput] = useState({
        id: "",
        pw: "",
    });

    const onChangeInput = (event) => {
        const { name, value } = event.target;
        setInput({
            ...input,
            [name]: value,
        });
    };

    const navigate = useNavigate();
    // const onLogin = (object) => {
    //     const temp = users.filter((data) => data.id === object.id)[0];
    //     if (temp) {
    //         if (temp.pw === object.pw) {
    //             setLogin();
    //         }
    //     }
    // };
    const onLogin = (object) => {
        const temp = users.filter((data) => data.id === object.id)[0];
        if (temp) {
            if (temp.pw === object.pw) {
                setLogin();
                navigate(`/admin/${temp.id}`, { replace: true });
            }
        }
    };
    //     [navigate]
    // );
    return (
        <form>
            <div>
                아이디
                <input type="text" name="id" onChange={onChangeInput} />
            </div>
            <div>
                비밀번호
                <input type="password" name="pw" onChange={onChangeInput} />
            </div>
            <button
                type="button"
                onClick={() => {
                    // onclick();
                    onLogin(input);
                }}
            >
                로그인
            </button>
        </form>
    );
}

export default Login;
