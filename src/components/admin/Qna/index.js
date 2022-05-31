import React from "react";

import List from "./List";
import Preview from "./Preview";
import Editor from "./Editor";

import "../../../scss/admin/qna.scss";

function Qna() {
    return (
        <div className="qna">
            <List />
            <Preview />
            <Editor />
        </div>
    );
}

export default Qna;
