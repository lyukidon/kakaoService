import React from "react";
import Helmet from "react-helmet";

import { TopNav, SideNav } from "../components/admin/Nav/Index";
import Editor from "../components/admin/Editor/Index";
import Article from "../components/admin/Article/Index";

import "../scss/admin/webEditor.scss";

function WebEditor({ data }) {
    return (
        <div>
            <Helmet>
                <body className="adminBody" />
            </Helmet>
            <TopNav />
            <div className="contents">
                <SideNav />
                <div className="editorPage">
                    <Article faqData={data} editor />
                    <Editor />
                </div>
            </div>
        </div>
    );
}

export default WebEditor;
