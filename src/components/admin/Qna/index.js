import React, { useState } from "react";

import List from "./List";
import Preview from "./Preview";
import Editor from "./Editor";

import "../../../scss/admin/qna.scss";

function Qna() {
    const [toggleId, setToggleId] = useState(-1);
    const [toggleData, setToggleData] = useState({
        id: 0,
        title: "",
        content: "",
        status: false,
        answer: "",
    });
    return (
        <div className="qna">
            <List
                editor
                toggleId={toggleId}
                setToggleId={setToggleId}
                toggleData={toggleData}
                setToggleData={setToggleData}
            />
            {toggleId !== -1 && (
                <>
                    <Preview
                        toggleId={toggleId}
                        setToggleId={setToggleId}
                        toggleData={toggleData}
                        setToggleData={setToggleData}
                    />
                    <Editor
                        toggleId={toggleId}
                        setToggleId={setToggleId}
                        toggleData={toggleData}
                        setToggleData={setToggleData}
                    />
                </>
            )}
        </div>
    );
}

export default Qna;
