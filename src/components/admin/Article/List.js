import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default ({editor, article, onClickEditBtn}) => {
    return (
        <>
            {article.map(
                (c, i) =>
                    i < 9 && (
                        <div key={c.article_id} className="articleBox">
                            <div className={editor && "if-editor-true"}>
                                {c.content}
                            </div>
                            {editor && (
                                <div>
                                    {/* 수정버튼 */}
                                    <button
                                        type="button"
                                        className="edit"
                                        onClick={() => onClickEditBtn(c)}
                                    >
                                        <FontAwesomeIcon
                                            icon="fa-solid fa-pen-to-square"
                                            size="lg"
                                        />
                                    </button>
                                    {/* 삭제버튼 */}
                                    <button type="button" className="trash">
                                        <FontAwesomeIcon
                                            icon="fa-solid fa-trash"
                                            size="lg"
                                        />
                                    </button>
                                </div>
                            )}
                        </div>
                    )
            )}
        </>
    );
};
