import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DataStat = ({ service, category, platform, article, faqData }) => (
    <div className="dataStat">
        <div className="titleNlink">
            <h4>도움말 통계</h4>
            <Link to="/admin/datastat">
                <h4>더보기 &gt;</h4>
            </Link>
        </div>
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
function EditArticle({ faqData }) {
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
    const tempStr = ["service", "category", "platform"];

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
                <div className="titleNlink">
                    <h4>도움말 목록</h4>
                    <Link to="/admin/faq">
                        <h4>더보기 &gt;</h4>
                    </Link>
                </div>
                {/* 카테고리 설정 */}
                <div className="categorySelectAll">
                    {tempStr.map((dataName, index, arr) => {
                        const variable = eval(dataName);
                        return (
                            <div
                                className="categorySelectBox"
                                key={variable.content}
                            >
                                <div>
                                    <select name={dataName} id="">
                                        {variable.map((c) => (
                                            <option
                                                key={c.content}
                                                id={`${dataName}_id`}
                                                value={c[`${dataName}_id`]}
                                                onClick={changeOption}
                                            >
                                                {c.content}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {index !== arr.length - 1 && (
                                    <FontAwesomeIcon
                                        className="rightArrow"
                                        icon="fa-solid fa-angle-right"
                                        size="xl"
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>

                <div>
                    {article.map((c) => (
                        <div key={c.article_id} className="articleBox">
                            <div className="articleDiv inlineBlock">
                                {c.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default EditArticle;
