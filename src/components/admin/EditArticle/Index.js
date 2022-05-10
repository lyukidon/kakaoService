/* eslint react/self-closing-comp: 0 */
import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Category from "../Category";
import Editor from "./Editor";

import "../../../scss/admin/EditArticle.scss";

// 관리자 컴포넌트
function WebEditor({ faqData }) {
    // 선택된 옵션 값
    const [ids, setIds] = useState({
        service_id: 1,
        category_id: 1,
        platform_id: 1,
        article_id: 1,
    });

    // 분류할 데이터 변수
    const [service, setService] = useState([]);
    const [category, setCategory] = useState([]);
    const [platform, setPlatform] = useState([]);
    const [article, setArticle] = useState([]);

    // 데이터 분류하기
    useEffect(() => {
        if (faqData) {
            setService(faqData.service);
            setCategory(
                faqData.category.filter((c) => c.service_id === ids.service_id)
            );
            setPlatform(
                faqData.platform.filter(
                    (c) =>
                        c.service_id === ids.service_id &&
                        c.category_id === ids.category_id
                )
            );
            setArticle(
                faqData.article
                    .filter(
                        (c) =>
                            c.service_id === ids.service_id &&
                            c.category_id === ids.category_id &&
                            c.platform_id === ids.platform_id
                    )
                    .sort((a, b) => a.article_id - b.article_id)
            );
        }
    }, [faqData, ids]);

    // 카테고리 클릭 시 실행되는 함수
    const changeOption = (event) => {
        const { id, value } = event.target;
        setIds({
            ...ids,
            [id]: +value,
        });
    };
    // 카테고리 추가 하기
    const [option, setOption] = useState({
        service: "",
        category: "",
        platform: "",
    });
    const optionValue = (event) => {
        const { name, value } = event.target;
        setOption({
            ...option,
            [name]: value,
        });
    };
    const tempStr = ["service", "category", "platform"];
    const tempVar = [service, category, platform];
    const tempFunc = [setService, setCategory, setPlatform];
    const addOption = (event) => {
        const { name } = event.target;
        if (tempStr.indexOf(name) !== -1) {
            const optionData = option[name];
            if (optionData.length) {
                tempFunc[tempStr.indexOf(name)]([
                    ...eval(name),
                    { content: optionData },
                ]);
            } else {
                alert("내용을 입력해주세요");
            }
            setOption({
                service: "",
                category: "",
                platform: "",
            });
        }
    };
    // 카테고리 제거하기
    const removeOption = (event) => {
        const { name } = event.target;
        const index = tempStr.indexOf(name);
        const id = ids[`${name}_id`];
        tempFunc[index](tempVar[index].filter((c) => c[`${name}_id`] !== id));
    };

    // 글 제거하기
    const removeArticle = (id) => {
        setArticle(article.filter((c) => c.article_id !== id));
    };
    // textarea에서 탭 사용하기
    const onTab = (event) => {
        if (event.keyCode === 9) {
            event.preventDefault();
            document.execCommand("insertText", false, "   ");
        }
    };

    // 글 추가하기
    const [write, setWrite] = useState(false);

    // 글 수정하기
    const [editBtn, setEditBtn] = useState(-1);
    const [editData, setEditData] = useState({
        content: "",
        explain: "",
    });
    const onEditBtn = (id) => {
        if (editBtn === id) {
            setEditBtn(-1);
            setEditData({
                content: "",
                explain: "",
            });
        } else {
            setEditBtn(id);
            const temp = article.filter((c) => c.article_id === id)[0];
            const { content, explain } = temp;
            setEditData({
                content,
                explain,
            });
        }
    };
    const onEditData = (id, explain) => {
        setArticle([
            ...article.filter((c) => c.article_id !== id),
            {
                ...ids,
                article_id: id,
                ...editData,
                explain,
            },
        ]);
        setEditBtn(-1);
    };

    return (
        <div className="editArticle">
            <div className="articles">
                <h4>도움말 목록</h4>
                {/* 카테고리 설정 */}
                <div className="categorySelectAll">
                    {tempStr.map((c) => {
                        const variable = eval(c);
                        return (
                            <Category
                                key={variable.content}
                                data={variable}
                                dataName={c}
                                changeOption={changeOption}
                                optionValue={optionValue}
                                addOption={addOption}
                                option={option}
                                removeOption={removeOption}
                            />
                        );
                    })}
                    <button
                        type="button"
                        className="addArticleBtn"
                        onClick={() => setWrite(!write)}
                    >
                        + 추가 작성
                    </button>
                </div>

                <div>
                    {article
                        .sort((a, b) => a.article_id - b.article_id)
                        .map((c) => (
                            <>
                                <div key={c.article_id} className="articleBox">
                                    <div className="articleDiv inlineBlock">
                                        {c.content}
                                    </div>
                                    <div className="buttonDiv inlineBlock">
                                        <button
                                            type="button"
                                            onClick={() =>
                                                onEditBtn(c.article_id)
                                            }
                                        >
                                            <FontAwesomeIcon
                                                className="pencil"
                                                icon="fa-solid fa-pen-to-square"
                                                size="lg"
                                            />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                removeArticle(c.article_id);
                                                setEditData({
                                                    content: "",
                                                    explain: "",
                                                });
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                className="trashCan"
                                                icon="fa-solid fa-trash-can"
                                                size="lg"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </>
                        ))}
                </div>
            </div>
            <div className="editting">
                {write && (
                    <div>
                        <input
                            type="text"
                            name="content"
                            value={editData.content}
                            onChange={(event) => {
                                setEditData({
                                    ...editData,
                                    content: event.target.value,
                                });
                            }}
                        />
                        <Editor
                            explain={editData.explain}
                            setEditData={setEditData}
                            onEditData={onEditData}
                            articleId={editBtn}
                        />
                    </div>
                )}
                {editBtn !== -1 && (
                    <div>
                        <input
                            type="text"
                            name="content"
                            value={editData.content}
                            onChange={(event) => {
                                setEditData({
                                    ...editData,
                                    content: event.target.value,
                                });
                            }}
                        />
                        <Editor
                            explain={editData.explain}
                            editData={editData}
                            setEditData={setEditData}
                            onEditData={onEditData}
                            articleId={editBtn}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default WebEditor;
