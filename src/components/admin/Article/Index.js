/* eslint react/self-closing-comp: 0 */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import List from "./List";

import "../../../scss/admin/article.scss";

// 관리자 컴포넌트
function Article({ faqData, editor, articleId, setArticleId, setSingleArti }) {
    const [ids, setIds] = useState({
        service_id: 0,
        category_id: 0,
        platform_id: 0,
        article_id: 0,
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
                    .filter((c) => {
                        if (ids.service_id === 0) {
                            return c;
                        } else if (ids.category_id === 0) {
                            return c.service_id === ids.service_id;
                        } else if (ids.platform_id === 0) {
                            return (
                                c.service_id === ids.service_id &&
                                c.category_id === ids.category_id
                            );
                        } else {
                            return (
                                c.service_id === ids.service_id &&
                                c.category_id === ids.category_id &&
                                c.platform_id === ids.platform_id
                            );
                        }
                    })
                    .sort((a, b) => a.article_id - b.article_id)
            );
        }
    }, [faqData, ids]);

    const changeOption = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "service_id":
                setIds({
                    ...ids,
                    [name]: +value,
                    category_id: 0,
                    platform_id: 0,
                });
                break;
            case "category_id":
                setIds({ ...ids, [name]: +value, platform_id: 0 });
                break;
            case "platform_id":
                setIds({ ...ids, [name]: +value });
                break;
            default:
                return null;
        }
    };

    // 수정 클릭 시
    const onClickEditBtn = (data) => {
        if (data.article_id === articleId) {
            setArticleId(-1);
        } else {
            setArticleId(data.article_id);
            setSingleArti({ ...data });
        }
    };
    return (
        <div className="article">
            {/* 제목 */}
            {!editor ? <h4>도움말 목록</h4> : <h4>도움말 관리</h4>}

            {/* 카테고리 선택 */}
            <div className="selectBox">
                <div>
                    <div className="serviceSelect">
                        <div>
                            <select
                                name="service_id"
                                onChange={(event) => changeOption(event)}
                            >
                                <option value={0}>전체</option>
                                {service.map((c) => (
                                    <option
                                        key={c.content}
                                        id="service_id"
                                        value={c.service_id}
                                    >
                                        {c.content}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    {ids.service_id !== 0 && (
                        <>
                            <FontAwesomeIcon
                                icon="fa-solid fa-angle-right"
                                size="xl"
                            />
                            <div className="categorySelect">
                                <div>
                                    <select
                                        name="category_id"
                                        onChange={(event) =>
                                            changeOption(event)
                                        }
                                    >
                                        {ids.service_id !== 0 && (
                                            <option value={0}>전체</option>
                                        )}
                                        {category.map((c) => (
                                            <option
                                                key={c.content}
                                                id="category_id"
                                                value={c.category_id}
                                            >
                                                {c.content}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </>
                    )}
                    {ids.category_id !== 0 && (
                        <>
                            <FontAwesomeIcon
                                icon="fa-solid fa-angle-right"
                                size="xl"
                            />
                            <div className="platformSelect">
                                <div>
                                    <select
                                        name="platform_id"
                                        onChange={(event) =>
                                            changeOption(event)
                                        }
                                    >
                                        {ids.category_id !== 0 && (
                                            <option value={0}>전체</option>
                                        )}
                                        {platform.map((c) => (
                                            <option
                                                key={c.content}
                                                id="platform_id"
                                                value={c.platform_id}
                                            >
                                                {c.content}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                {editor && (
                    <button
                        type="button"
                        onClick={() => {
                            console.log(article);
                            // article === null
                            //     ? alert("카테고리를 선택해주세요")
                            //     : setArticleId(article.length);
                        }}
                    >
                        <FontAwesomeIcon icon="fa-solid fa-plus" />
                        도움말 추가
                    </button>
                )}
            </div>
            <div>
                {/* 도움말 목록 */}
                <List
                    editor={editor}
                    article={article}
                    articleId={articleId}
                    setArticleId={setArticleId}
                    onClickEditBtn={onClickEditBtn}
                />
            </div>
        </div>
    );
}

export default Article;
