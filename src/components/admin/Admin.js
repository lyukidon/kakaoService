import React, { useEffect, useState } from "react";

// 옵션 버튼 컴포넌트
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

// 관리자 컴포넌트
function Admin({ faqData }) {
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

    // 옵션 클릭 시 실행되는 함수
    const onClick = (event) => {
        const { id, value } = event.target;
        setIds({
            ...ids,
            [id]: +value,
        });
    };

    // 버튼 관련 코드

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

            <div>
                {article.map((c) => (
                    <div>
                        <div>{c.content}</div>
                        <button>삭제</button>
                        <button>수정</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Admin;
