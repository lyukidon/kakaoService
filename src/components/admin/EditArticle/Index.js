/* eslint react/self-closing-comp: 0 */
import React, { useEffect, useState, useRef, useAsync } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Category from "../Category";
import Editor from "./Editor";

import "../../../scss/admin/EditArticle.scss";
import EditArticle from "../Article";

const dataName = ["service", "category", "platform", "article"];
// 관리자 컴포넌트
function Index({ faqData }) {
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
    
    useEffect(() => {
        console.log(article);
    }, [article]);
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

    const changeOption = (event) => {
        const { id, value } = event.target;
        setIds({
            ...ids,
            [id]: +value,
        });
    };

    return (
        <div>
            <select name="service" id="">
                <option value="">선택해주세요</option>
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
            <select name="" id="">
                <option value="">선택해주세요</option>
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
            <select name="" id="">
                <option value="">선택해주세요</option>
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
            {article.map((c) => (
                <div key={c.article_id}>{c.content}</div>
            ))}
        </div>
    );
}

export default Index;
