import React, { useEffect } from "react";
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
                        setChkTrash(false);
                        setArticle(
                            article.filter((c) => c.article_id !== articleId)
                        );
                    }}
                >
                    삭제
                </button>
                <button
                    type="button"
                    onClick={() => {
                        handleFunc(data, chkTrash, setChkTrash);
                        setChkTrash(false);
                    }}
                >
                    취소
                </button>
            </div>
        </div>
    );
}

export default function List({
    handleFunc,
    editor,
    service,
    category,
    platform,
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
            <div className="listHeader">
                <div className="listCategory">카테고리</div>
                <div className="listTitle">제목</div>
            </div>
            {article.map((c) => (
                <div
                    key={c.article_id}
                    className="articleBox"
                    
                >
                    <div className="badge">
                        <div>
                            {category.length === 0
                                ? service[c.service_id - 1].content
                                : platform.length === 0
                                ? category[c.category_id - 1].content
                                : platform[c.platform_id - 1].content}
                        </div>
                    </div>
                    <div
                        role="button"
                        tabIndex={0}
                        className={
                            `${editor ? "content if-editor-true" : "content"} ${ c.article_id === articleId
                                ? "if-article-chosen"
                                : null}`
                        }
                        onClick={() => {
                            setActivateEditor(false);
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
                                className={
                                    activateEditor && c.article_id === articleId
                                        ? "edit activateEditor"
                                        : "edit"
                                }
                                onClick={() => {
                                    setChkTrash(false);
                                    setPreview(false);
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
                                    handleFunc(c, chkTrash, setChkTrash);
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
            ))}
        </>
    );
}
