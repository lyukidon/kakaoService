/* eslint react/self-closing-comp: 0 */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        console.log(event)
        const { name, value } = event.target;
        console.log('name', name)
        console.log('value', value)
        setIds({
            ...ids,
            [name]: +value,
        });
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
                        <div className="title">서비스</div>
                        <div>
                            <select
                                name="service_id"
                                onChange={(event) => changeOption(event)}
                            >
                                <option
                                    value=""
                                    onClick={() => {
                                        setIds({ ...ids, service_id: 0 });
                                    }}
                                >
                                    전체
                                </option>
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
                    <FontAwesomeIcon icon="fa-solid fa-angle-right" size="xl" />
                    <div className="categorySelect">
                        <div className="title">카테고리</div>
                        <div>
                            <select name="category_id" onChange={(event) => changeOption(event)}>
                                {ids.service_id !== 0 && (
                                    <option
                                        value=""
                                        onClick={() => {
                                            setIds({ ...ids, category_id: 0 });
                                        }}
                                    >
                                        전체
                                    </option>
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
                    <FontAwesomeIcon icon="fa-solid fa-angle-right" size="xl" />
                    <div className="platformSelect">
                        <div className="title">플랫폼</div>
                        <div>
                            <select name="platform_id" onChange={(event) => changeOption(event)}>
                                {ids.category_id !== 0 && (
                                    <option
                                        value=""
                                        onClick={() => {
                                            setIds({ ...ids, platform_id: 0 });
                                        }}
                                    >
                                        전체
                                    </option>
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
                        추가
                    </button>
                )}
            </div>
            <div>
                {/* 도움말 목록 */}
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
            </div>
        </div>
    );
}

export default Article;
