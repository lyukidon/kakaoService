/* eslint react/self-closing-comp: 0 */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../scss/admin/article.scss";

// 관리자 컴포넌트
function Article({ faqData, editor }) {
    useEffect(() => {
        console.log(editor);
    });
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
        const { id, value } = event.target;
        setIds({
            ...ids,
            [id]: +value,
        });
    };

    return (
        <div className="article">
            <div className="selectBox">
                <div className="serviceSelect">
                    <div>서비스</div>
                    <div>
                        <select name="service" id="">
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
                                    onClick={(event) => changeOption(event)}
                                >
                                    {c.content}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <FontAwesomeIcon icon="fa-solid fa-angle-right" size="xl" />
                <div className="categorySelect">
                    <div>카테고리</div>
                    <div>
                        <select name="" id="">
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
                                    onClick={(event) => changeOption(event)}
                                >
                                    {c.content}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <FontAwesomeIcon icon="fa-solid fa-angle-right" size="xl" />
                <div className="platformSelect">
                    <div>플랫폼</div>
                    <div>
                        <select name="" id="">
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
                                    onClick={(event) => changeOption(event)}
                                >
                                    {c.content}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div>
                {article.map(
                    (c, i) =>
                        i < 9 && (
                            <div key={c.article_id} className="articleBox">
                                <div>{c.content}</div>
                                <div>
                                    <button type="button">
                                        <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                                    </button>
                                    <button type="button">
                                        <FontAwesomeIcon icon="fa-solid fa-trash" />
                                    </button>
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
    );
}

export default Article;
