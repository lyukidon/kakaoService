import React, { useEffect, useState } from "react";

import Category from "./Category";

const DataStat = ({ service, category, platform, article, faqData }) => (
    <div className="dataStat">
        <h4>데이터 통계</h4>
        <ul>
            <li>서비스 갯수: {service.length}</li>
            <li>카테고리 갯수(상위 옵션 기준): {category.length}</li>
            <li>OS 갯수(상위 옵션 기준): {platform.length}</li>
            <li>글 갯수: {article.length}</li>
            <li>전체 글 갯수: {faqData.article.length}</li>
        </ul>
    </div>
);

// 관리자 컴포넌트
const EditArticle = ({ faqData }) => {
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

    // 글 쓰기, 추가하기
    const [write, setWrite] = useState(false);

    return (
        <>
            {/* 데이터 통계 */}
            {faqData && (
                <DataStat
                    service={service}
                    category={category}
                    platform={platform}
                    article={article}
                    faqData={faqData}
                />
            )}

            {/* 데이터 변경 */}
            <div className="editArticle">
                <h4>데이터 변경</h4>
                {/* 카테고리 설정 */}
                <div className="categorySelectAll">
                    {tempStr.map((c, i) => {
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
                                index={i + 1}
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
                    {write && (
                        <div>
                            <textarea />
                            <button type="button">추가하기</button>
                        </div>
                    )}
                </div>

                <div>
                    {article.map((c) => (
                        <div key={c.article_id} className="articleBox">
                            <div className="articleDiv inlineBlock">
                                {c.content}
                            </div>
                            <div className="buttonDiv inlineBlock">
                                <button
                                    type="button"
                                    onClick={() => removeArticle(c.article_id)}
                                >
                                    삭제
                                </button>
                                <button type="button">수정</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
EditArticle.displayName = "EditArticle";

export default EditArticle;
