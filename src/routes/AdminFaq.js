import React, { useState } from "react";
import Helmet from "react-helmet";

import { TopNav, SideNav } from "../components/admin/Nav/Index";
import Editor from "../components/admin/Editor/Index";
import Article from "../components/admin/Article/Index";

import "../scss/admin/webEditor.scss";

function WebEditor({ data }) {
    const [activateEditor, setActivateEditor] = useState(false);
    return (
        <div>
            <Helmet>
                <body className="adminBody" />
            </Helmet>
            <TopNav />
            <div className="contents">
                <SideNav />
                <div className="editorPage">
                    <Article
                        faqData={data}
                        editor
                        activateEditor={activateEditor}
                        setActivateEditor={setActivateEditor}
                    />
                    <Editor
                        activateEditor={activateEditor}
                        setActivateEditor={setActivateEditor}
                    />
                </div>
            </div>
        </div>
    );
}

export default WebEditor;
