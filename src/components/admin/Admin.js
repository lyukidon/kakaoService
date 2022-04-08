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

function SelectComponent({ data, dataName, onClick }) {
    return (
        <div>
            <select name={dataName} id="">
                {data.map((c) => (
                    <option
                        id={`${dataName}_id`}
                        value={c[`${dataName}_id`]}
                        onClick={onClick}
                    >
                        {c.content}
                    </option>
                ))}
            </select>
            <input type="text" />
            <button name="addService">추가</button>
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
            <SelectComponent
                data={service}
                dataName="service"
                onClick={onClick}
            />
            <SelectComponent
                data={category}
                dataName="category"
                onClick={onClick}
            />
            <SelectComponent
                data={platform}
                dataName="platform"
                onClick={onClick}
            />

            <button>추가 작성</button>
            <ArticleComponent article={article} />
        </div>
    );
}

export default Admin;
