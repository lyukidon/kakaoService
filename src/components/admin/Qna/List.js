import React, { useEffect, useState } from "react";
import axios from "axios";

function List({ toggleList, setToggleList, toggleData, setToggleData }) {
    const [qnaData, setQnaData] = useState([]);
    const [filter, setFilter] = useState([]);
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
    return (
        <div className="listComponent">
            리스트
            <div>
                <select name="" id="" onChange={(evt) => setOption(evt)}>
                    <option value="all">
                        전체
                    </option>
                    <option value="false">
                        대기
                    </option>
                    <option value="true">
                        완료
                    </option>
                </select>
            </div>
            <div>
                {filter.map((c) => (
                    <div key={c.id} className="list">
                        <div
                            style={
                                c.status
                                    ? { "background-color": "yellow" }
                                    : { "background-color": "red" }
                            }
                        >
                            {c.status ? "완료" : "대기"}
                        </div>
                        <div>{c.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default List;
