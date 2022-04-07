import axios from "axios";
import React, { useEffect, useState } from "react";
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useForm } from 'react-hook-form';

export default () => {
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
    const onLogin = (object) => {
        const find = users.filter((data) => data.id === object.id)[0];
        if (!find) {
            return alert("다시 입력하세요");
        }
        if (find.pw === object.pw) {
            window.location.href = "/admin";
        } else {
            alert("다시 입력하세요");
        }
    };
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
            <button type="button" onClick={() => onLogin(input)}>
                로그인
            </button>
        </form>
    );
};
