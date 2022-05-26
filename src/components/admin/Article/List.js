import React, { useEffect, useState } from "react";
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
            <div className="question">삭제하시겠습니까?</div>
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
    // pagination
    // page 갯수
    const [page, setPage] = useState([]);
    // 선택된 페이지
    const [pageSelect, setPageSelect] = useState(1);
    // 페이지에 렌더링할 도움말 번호
    const [low, setLow] = useState(0);
    const [high, setHigh] = useState(0);
    const editorRender = 18;
    const nonEditorRender = 7;
    useEffect(() => {
        let tmparr = [];
        const num = editor
            ? Math.ceil(article.length / editorRender)
            : Math.ceil(article.length / nonEditorRender);
        for (let i = 1; i <= num; i++) {
            tmparr = [...tmparr, i];
        }
        setPage([...tmparr]);
        setPageSelect(1);
    }, [article]);
    useEffect(() => {
        if (editor) {
            setLow((pageSelect - 1) * editorRender);
            setHigh(pageSelect * editorRender);
        } else {
            setLow((pageSelect - 1) * nonEditorRender);
            setHigh(pageSelect * nonEditorRender);
        }
    }, [pageSelect]);
    return (
        <>
            {/* 헤더 */}
            <div className="listHeader">
                <div className="listCategory">카테고리</div>
                <div className="listTitle">제목</div>
            </div>
            {/* 도움말 목록 */}
            {article.map(
                (c, i) =>
                    i >= low &&
                    i < high && (
                        <div key={c.article_id} className="articleBox">
                            <div className="badge">
                                <span>
                                    {category.length === 0
                                        ? service[c.service_id - 1].content
                                        : platform.length === 0
                                        ? category[c.category_id - 1].content
                                        : platform[c.platform_id - 1].content}
                                </span>
                            </div>
                            <div
                                role="button"
                                tabIndex={0}
                                className={`${
                                    editor
                                        ? "content if-editor-true"
                                        : "content"
                                } ${
                                    c.article_id === articleId
                                        ? "if-article-chosen"
                                        : null
                                }`}
                                onClick={() => {
                                    setActivateEditor(false);
                                    handleFunc(c, preview, setPreview);
                                }}
                            >
                                {c.content}
                            </div>
                        </div>
                    )
            )}
            {/* Pagination */}
            <div className="page">
                <div>
                    {page.map((c, i) => (
                        <button
                            key={c}
                            type="button"
                            className={`pageBtn ${
                                pageSelect === i + 1 && "if-page-selected"
                            }`}
                            onClick={() => setPageSelect(c)}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
