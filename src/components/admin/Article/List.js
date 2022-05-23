import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Warning({
    data,
    handleFunc,
    chkTrash,
    setChkTrash,
    article,
    setArticle,
    articleId,
}) {
    return (
        <div className="warning">
            <div>삭제하시겠습니까?</div>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        handleFunc(data, chkTrash, setChkTrash);
                        setChkTrash(false);
                    }}
                >
                    취소
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setChkTrash(false);
                        setArticle(
                            article.filter((c) => c.article_id !== articleId)
                        );
                    }}
                >
                    삭제
                </button>
            </div>
        </div>
    );
}

export default function List({
    handleFunc,
    editor,
    service,
    activateEditor,
    setActivateEditor,
    article,
    setArticle,
    articleId,
    setArticleId,
    chkTrash,
    setChkTrash,
    preview,
    setPreview,
}) {
    return (
        <>
            {article.map(
                (c, i) =>
                    i < 8 && (
                        <div
                            key={c.article_id}
                            className={
                                c.article_id === articleId
                                    ? "articleBox if-article-chosen"
                                    : "articleBox"
                            }
                        >
                            <div className="badge">
                                {service[c.service_id - 1].content}
                            </div>
                            <div
                                role="button"
                                tabIndex={0}
                                className={
                                    editor
                                        ? "content if-editor-true"
                                        : "content"
                                }
                                onClick={() => {
                                    setActivateEditor(false)
                                    setPreview(!preview);
                                    handleFunc(c, preview, setPreview);
                                }}
                                // onKeyDown={() => setPreview(!preview)}
                            >
                                {c.content}
                            </div>
                            {editor && (
                                <div className="articlebutton">
                                    {/* 수정버튼 */}
                                    <button
                                        type="button"
                                        className={activateEditor && c.article_id === articleId ? "edit activateEditor" : "edit"}
                                        onClick={() => {
                                            setChkTrash(false);
                                            setPreview(false)
                                            handleFunc(
                                                c,
                                                activateEditor,
                                                setActivateEditor
                                            );
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon="fa-solid fa-pen-to-square"
                                            size="lg"
                                        />
                                    </button>
                                    {/* 삭제버튼 */}
                                    <button
                                        type="button"
                                        className="trash"
                                        onClick={() => {
                                            setActivateEditor(false);
                                            setChkTrash(!chkTrash);
                                            handleFunc(
                                                c,
                                                chkTrash,
                                                setChkTrash
                                            );
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon="fa-solid fa-trash"
                                            size="lg"
                                        />
                                    </button>
                                    {c.article_id === articleId && chkTrash && (
                                        <Warning
                                            data={c}
                                            chkTrash={chkTrash}
                                            setChkTrash={setChkTrash}
                                            article={article}
                                            setArticle={setArticle}
                                            articleId={articleId}
                                            handleFunc={handleFunc}
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    )
            )}
        </>
    );
}
