import React from "react";

export default ({ article, setArticle, articleId, setArticleId, setPreview, setWarn }) => {
    return (
        <div className="previewWarning">
            <div className="title">삭제 하시겠습니까</div>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        setArticle(
                            article.filter((c) => c.article_id !== articleId)
                        );
                        setArticleId(-1);
                        setPreview(false);
                        setWarn(false);
                    }}
                >
                    예
                </button>
                <button
                    type="button"
                    onClick={() => {
                        setWarn(false);
                    }}
                >
                    아니오
                </button>
            </div>
        </div>
    );
};
