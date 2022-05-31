import React, { useEffect, useState } from "react";
import axios from "axios";

function List(props) {
    const [qnaData, setQnaData] = useState([]);
    useEffect(() => {
        async function getData() {
            const data = await (await axios.get("/data/qna.json")).data;
            setQnaData(data);
        }
        getData();
    }, []);
    return (
        <div className="listComponent">
            리스트
            <div>
                {qnaData.map((c) => (
                    <div key={c.id} className="list">
                        <div
                            style={
                                c.status
                                    ? { "background-color": "yellow" }
                                    : { "background-color": "red" }
                            }
                        >
                            {c.status ? "완료" : "요청"}
                        </div>
                        <div>{c.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default List;
