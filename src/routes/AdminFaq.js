import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";

import { TopNav, SideNav } from "../components/admin/Nav/Index";
import Editor from "../components/admin/Editor/Index";
import Article from "../components/admin/Article/Index";

import "../scss/admin/webEditor.scss";

function WebEditor({ data }) {
    // 에디터인지 아닌지 확인하기
    const [activateEditor, setActivateEditor] = useState(false);
    // 수정 버튼 클릭 시 확인 및 데이터
    const [articleId, setArticleId] = useState(-1);
    const [singleArti, setSingleArti] = useState(null);
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
                        editor
                        faqData={data}
                        activateEditor={activateEditor}
                        setActivateEditor={setActivateEditor}
                        articleId={articleId}
                        setArticleId={setArticleId}
                        singleArti={singleArti}
                        setSingleArti={setSingleArti}
                    />
                    <Editor
                        activateEditor={activateEditor}
                        setActivateEditor={setActivateEditor}
                        articleId={articleId}
                        setArticleId={setArticleId}
                        singleArti={singleArti}
                        setSingleArti={setSingleArti}
                    />
                </div>
            </div>
        </div>
    );
}

export default WebEditor;
