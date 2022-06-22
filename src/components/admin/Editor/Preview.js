import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Warning from "./Warning";

import "../../../scss/admin/preview.scss";

function Preview({
    article,
    setArticle,
    setPreview,
    setActivateEditor,
    articleId,
    setArticleId,
    singleArti,
}) {
    const explainRef = useRef(null);
    useEffect(() => {
        explainRef.current.innerHTML = singleArti.explain;
    }, [singleArti]);
    const [warn, setWarn] = useState(false);
    return (
        <div>
            <div className="previewTitle">
                <b>{singleArti.content}</b>
                <div className="previewBtn">
                    {/* 에디터 버튼 */}
                    <button
                        type="button"
                        className="edit"
                        onClick={() => {
                            setActivateEditor(true);
                            setPreview(false);
                        }}
                        title="변경"
                    >
                        <FontAwesomeIcon
                            icon="fa-solid fa-pen-to-square"
                            size="lg"
                        />
                    </button>
                    {/* 삭제 버튼 */}
                    <button
                        type="button"
                        className="trash"
                        onClick={() => {
                            setWarn(!warn);
                        }}
                        title="삭제"
                    >
                        <FontAwesomeIcon icon="fa-solid fa-trash" size="lg" />
                    </button>
                    {warn && (
                        <Warning
                            article={article}
                            setArticle={setArticle}
                            articleId={articleId}
                            setArticleId={setArticleId}
                            setPreview={setPreview}
                            setWarn={setWarn}
                        />
                    )}
                </div>
            </div>
            <hr />
            <div className="previewExplain" ref={explainRef} />
        </div>
    );
}

export default Preview;
