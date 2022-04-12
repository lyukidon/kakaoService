import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import useStore from "../../store/store";
import MonthGraph from "./MonthGraph";
import Option from "./Option";

import "../../scss/admin/admin.scss";

// 관리자 컴포넌트
function Admin({ faqData, params }) {
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

    // 상단 코드
    const navigate = useNavigate();
    const { toggleLogin } = useStore();

    return (
        <div className="adminPage">
            {/* 상단 */}
            <div className="welcome">
                {params.id} 님, 환영합니다.
                <button
                    type="button"
                    onClick={() => {
                        navigate("/");
                        toggleLogin();
                    }}
                >
                    로그 아웃
                </button>
                <button type="button">홈</button>
            </div>
            {/* 데이터 정보 */}
            <div className="inlineBlock">
                <div>서비스 갯수: {service.length}</div>
                <div>카테고리 갯수(상위 옵션 기준): {category.length}</div>
                <div>OS 갯수(상위 옵션 기준): {platform.length}</div>
                <div>글 갯수: {article.length}</div>
                <div>전체 글 갯수: {faqData && faqData.article.length}</div>
                <div>접속 인원 수(하루, 일주일, 한달)</div>
            </div>
            <MonthGraph />
            {/* 하단 */}
            <div>
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

                <button type="button" className="addArticleBtn">
                    추가 작성
                </button>

                <div>
                    {article.map((c, index) => (
                        <div key={c.article_id} className="articleBox">
                            <div className="articleIndex">{index + 1}</div>
                            <div className="articleDiv">{c.content}</div>
                            <div className="buttonDiv">
                                <button type="button">삭제</button>
                                <button type="button">수정</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
// Admin.propTypes = {
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

export default Admin;
