import React, { useEffect, useState } from "react";

function ArticleComponent({ article }) {
    return (
        <div>
            {article.map((c) => (
                <div>
                    <div>{c.content}</div>
                    <button>삭제</button>
                    <button>수정</button>
                </div>
            ))}
        </div>
    );
}

function Admin({ faqData }) {
    const [ids, setIds] = useState({
        service_id: 1,
        category_id: 1,
        platform_id: 1,
        article_id: 1,
    });

    const [service, setService] = useState([]);
    const [category, setCategory] = useState([]);
    const [platform, setPlatform] = useState([]);
    const [article, setArticle] = useState([]);

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
        console.log("click");
        console.log(ids);
    }, [faqData, ids]);

    const onClick = (event) => {
        const { id, value } = event.target;
        setIds({
            ...ids,
            [id]: +value,
        });
    };
    return (
        <div>
            <div>
                <select name="service" id="">
                    {service.map((c) => (
                        <option
                            id="service_id"
                            value={c.service_id}
                            onClick={onClick}
                        >
                            {c.content}
                        </option>
                    ))}
                </select>
                <button name="addService">추가</button>
            </div>
            <div>
                <select name="category" id="">
                    {category.map((c) => (
                        <option
                            id="category_id"
                            value={c.category_id}
                            onClick={onClick}
                        >
                            {c.content}
                        </option>
                    ))}
                </select>
                <button name="addCategory">추가</button>
            </div>
            <div>
                <select name="platform" id="">
                    {platform.map((c) => (
                        <option
                            id="platform_id"
                            value={c.platform_id}
                            onClick={onClick}
                        >
                            {c.content}
                        </option>
                    ))}
                </select>
                <button name="addPlatform">추가</button>
            </div>

            <button>추가 작성</button>
            <ArticleComponent article={article} />
        </div>
    );
}

export default Admin;
