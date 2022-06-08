import React, { useEffect, useState } from "react";
import axios from "axios";

function List({ editor, toggleId, setToggleId, toggleData, setToggleData }) {
    const [qnaData, setQnaData] = useState([]);
    const [filterData, setFilter] = useState([]);
    const setOption = (evt) => {
        switch (evt.target.value) {
            case "false":
                setFilter([...qnaData.filter((c) => c.status === false)]);
                break;
            case "true":
                setFilter([...qnaData.filter((c) => c.status === true)]);
                break;
            default:
                setFilter([...qnaData]);
                break;
        }
    };
    useEffect(() => {
        async function getData() {
            const data = await (await axios.get("/data/qna.json")).data;
            setQnaData(data);
            setFilter(data);
        }
        getData();
    }, []);
    // pagination
    const pageArr = new Array(Math.ceil(filterData.length / 7))
        .fill(1)
        .map((c, i) => c + i);
    const [countPage, setCountPage] = useState(1);

    return (
        <div className="listComponent">
            <h4 style={editor && { "margin-top": "5px" }}>문의 목록</h4>
            <div>
                <select name="" id="" onChange={(evt) => setOption(evt)}>
                    <option value="all">전체</option>
                    <option value="false">답변 대기</option>
                    <option value="true">답변 완료</option>
                </select>
            </div>
            <div>
                <div className="list" style={{ border: "none" }}>
                    <div>상태</div>
                    <div>제목</div>
                </div>
                {filterData.map((c, i) => {
                    if (i < countPage * 7 && i >= (countPage - 1) * 7) {
                        return (
                            <div key={c.id} className="list">
                                <div>
                                    <span
                                        className={
                                            c.status ? "complete" : "wait"
                                        }
                                    >
                                        {c.status ? "답변완료" : "답변대기"}
                                    </span>
                                </div>
                                <div
                                    role="button"
                                    tabIndex={0}
                                    className={`title ${
                                        toggleId !== -1 &&
                                        c.id === toggleId &&
                                        "activate"
                                    }`}
                                    onClick={() => {
                                        if (c.id === toggleId) {
                                            setToggleId(-1);
                                            setToggleData({
                                                id: 0,
                                                title: "",
                                                content: "",
                                                status: false,
                                                answer: "",
                                            });
                                        } else {
                                            const {
                                                id,
                                                title,
                                                content,
                                                status,
                                                answer,
                                            } = c;
                                            setToggleId(c.id);
                                            setToggleData({
                                                ...toggleData,
                                                id,
                                                title,
                                                content,
                                                status,
                                                answer,
                                            });
                                        }
                                    }}
                                >
                                    {c.title}
                                </div>
                            </div>
                        );
                    }
                })}

                <div className="page">
                    <div>
                        {pageArr.map((c) => (
                            <button
                                key={c}
                                type="button"
                                onClick={() => setCountPage(c)}
                                className={`pageBtn ${countPage === c && "if-page-selected"}`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;
