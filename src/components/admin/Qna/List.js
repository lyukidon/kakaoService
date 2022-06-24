import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    const renderNumbers = editor ? 10 : 7;
    const pageArr = new Array(Math.ceil(filterData.length / renderNumbers))
        .fill(1)
        .map((c, i) => c + i);
    const [countPage, setCountPage] = useState(1);

    return (
        <div className="listComponent">
            <div className="title">
                <h4 style={editor && { "marginTop": "5px" }}>문의 목록</h4>
                {!editor && (
                    <Link to="/admin/qna">
                        <h4>
                            더보기
                            <FontAwesomeIcon
                                className="rightArrow"
                                icon="fa-solid fa-angle-right"
                                size="lg"
                            />
                        </h4>
                    </Link>
                )}
            </div>
            <div>
                <select onChange={(evt) => setOption(evt)}>
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
                {filterData.map(
                    (c, i) =>
                        i >= (countPage - 1) * renderNumbers &&
                        i < countPage * renderNumbers && (
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
                        )
                )}

                <div className="page">
                    <div>
                        {pageArr.map((c) => (
                            <button
                                key={c}
                                type="button"
                                onClick={() => setCountPage(c)}
                                className={`pageBtn ${
                                    countPage === c && "if-page-selected"
                                }`}
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
