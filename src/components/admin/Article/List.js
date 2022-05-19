import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Warning({ setChkTrash, article, setArticle, articleId }) {
    return (
        <div className="warning">
            <div>삭제하시겠습니까?</div>
            <div>
                <button
                    type="button"
                    onClick={() => {
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
    handleEdit,
    editor,
    activateEditor,
    setActivateEditor,
    article,
    setArticle,
    articleId,
    setArticleId,
}) {
    const [chkTrash, setChkTrash] = useState(false);
    return (
        <>
            {article.map(
                (c, i) =>
                    i < 8 && (
                        <div key={c.article_id} className={c.article_id === articleId && activateEditor  ? "articleBox if-article-chosen" : "articleBox"}>
                            <div className={editor && "if-editor-true"}>
                                {c.content}
                            </div>
                            {editor && (
                                <div>
                                    {/* 수정버튼 */}
                                    <button
                                        type="button"
                                        className="edit"
                                        onClick={() => {
                                            setChkTrash(false);
                                            handleEdit(c);
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
                                            setArticleId(c.article_id);
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon="fa-solid fa-trash"
                                            size="lg"
                                        />
                                    </button>
                                    {c.article_id === articleId && chkTrash && (
                                        <Warning
                                            setChkTrash={setChkTrash}
                                            article={article}
                                            setArticle={setArticle}
                                            articleId={articleId}
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
