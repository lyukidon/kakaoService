import React, { forwardRef, useEffect, useState } from "react";

import Option from "./Option";

import "../../scss/admin/admin.scss";

// 관리자 컴포넌트
const Edit = forwardRef(({ faqData }, scrollRef) => {
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
    const changeOption = (event) => {
        const { id, value } = event.target;
        setIds({
            ...ids,
            [id]: +value,
        });
    };
    // 옵션 추가 하기
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
    // 옵션 제거하기
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
        <div>
            {/* 데이터 통계 */}
            <div className="Box">
                <h4
                    ref={(element) => {
                        scrollRef.current[1] = element;
                    }}
                >
                    데이터 통계
                </h4>
                <ul>
                    <li>서비스 갯수: {service.length}</li>
                    <li>카테고리 갯수(상위 옵션 기준): {category.length}</li>
                    <li>OS 갯수(상위 옵션 기준): {platform.length}</li>
                    <li>글 갯수: {article.length}</li>
                    <li>전체 글 갯수: {faqData && faqData.article.length}</li>
                </ul>
            </div>

            {/* 글 수정하기 */}
            <div className="Box">
                <h4
                    ref={(element) => {
                        const temp = element;
                        scrollRef.current[2] = temp;
                    }}
                >
                    글 수정하기
                </h4>
                {/* 옵션 설정 */}
                {tempStr.map((c, i) => {
                    const variable = eval(c);
                    return (
                        <Option
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
                <div>
                    {article.map((c, index) => (
                        <div key={c.article_id} className="articleBox">
                            <div className="articleIndex">{index + 1}</div>
                            <div className="articleDiv">{c.content}</div>
                            <div className="buttonDiv">
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
        </div>
    );
});
Edit.displayName = "Edit";
// Edit.propTypes = {
//     faqData: PropTypes.shape({
//         service: PropTypes.StrayOf(
//             PropTypes.shape({
//                 service_id: PropTypes.number,
//                 content: PropTypes.string,
//             })
//         ),
//         category: PropTypes.StrayOf(
//             PropTypes.shape({
//                 service_id: PropTypes.number,
//                 category_id: PropTypes.number,
//                 content: PropTypes.string,
//             })
//         ),
//         platform: PropTypes.StrayOf(
//             PropTypes.shape({
//                 service_id: PropTypes.number,
//                 category_id: PropTypes.number,
//                 platform_id: PropTypes.number,
//                 content: PropTypes.string,
//             })
//         ),
//         article: PropTypes.StrayOf(
//             PropTypes.shape({
//                 service_id: PropTypes.number,
//                 category_id: PropTypes.number,
//                 platform_id: PropTypes.number,
//                 article_id: PropTypes.string,
//                 content: PropTypes.string,
//             })
//         ).isRequired,
//     }).isRequired,
// };

export default Edit;
