import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import useStore from "../../store/store";

// 옵션 버튼 컴포넌트
function SelectComponent({ data, dataName, onClick }) {
    return (
        <div className="optionBox">
            <select name={dataName} id="">
                {data.map((c) => (
                    <option
                        key={c.id}
                        id={`${dataName}_id`}
                        value={c[`${dataName}_id`]}
                        onClick={onClick}
                    >
                        {c.content}
                    </option>
                ))}
            </select>
            <input type="text" placeholder="입력해주세요" />
            <button type="button" name="addService">
                추가
            </button>
        </div>
    );
}
SelectComponent.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            content: PropTypes.string,
        })
    ).isRequired,
    dataName: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

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
    const onClick = (event) => {
        const { id, value } = event.target;
        setIds({
            ...ids,
            [id]: +value,
        });
    };

    // 상단 코드
    const navigate = useNavigate();
    const { toggleLogin } = useStore();

    return (
        <div>
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
            {/* 하단 */}
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

                <button className="addArticleBtn">추가 작성</button>

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
Admin.propTypes = {
    faqData: PropTypes.shape({
        service: PropTypes.arrayOf(
            PropTypes.shape({
                service_id: PropTypes.number,
                content: PropTypes.string,
            })
        ),
        category: PropTypes.arrayOf(
            PropTypes.shape({
                service_id: PropTypes.number,
                category_id: PropTypes.number,
                content: PropTypes.string,
            })
        ),
        platform: PropTypes.arrayOf(
            PropTypes.shape({
                service_id: PropTypes.number,
                category_id: PropTypes.number,
                platform_id: PropTypes.number,
                content: PropTypes.string,
            })
        ),
        article: PropTypes.arrayOf(
            PropTypes.shape({
                service_id: PropTypes.number,
                category_id: PropTypes.number,
                platform_id: PropTypes.number,
                article_id: PropTypes.string,
                content: PropTypes.string,
            })
        ).isRequired,
    }).isRequired,
};

export default Admin;
