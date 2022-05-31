import React, { useState } from "react";

import List from "./List";
import Preview from "./Preview";
import Editor from "./Editor";

import "../../../scss/admin/qna.scss";

function Qna() {
    const [toggleList, setToggleList] = useState(false);
    const [toggleData, setToggleData] = useState({
        id: 0,
        title: "",
        content: "",
    });
    return (
        <div className="qna">
            <List
                toggleList={toggleList}
                setToggleList={setToggleList}
                toggleData={toggleData}
                setToggleData={setToggleData}
            />
            <Preview
                toggleList={toggleList}
                setToggleList={setToggleList}
                toggleData={toggleData}
                setToggleData={setToggleData}
            />
            <Editor
                toggleList={toggleList}
                setToggleList={setToggleList}
                toggleData={toggleData}
                setToggleData={setToggleData}
            />
        </div>
    );
}

export default Qna;
