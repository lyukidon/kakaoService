import React from "react";
import styled from "styled-components";

const Warning = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    padding: 10px;
    width: 150px;
    right: 10px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 5px #dddddd;
    > .title {
        margin-bottom: 10px;
    }
    > div {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        > button {
            padding: 0px 10px;
            background-color: transparent;
            border: 1px solid black;
            border-radius: 7px;
        }
    }
`;

export default ({ article, setArticle, articleId, setArticleId, setPreview, setWarn }) => {
    return (
        <Warning>
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
        </Warning>
    );
};
