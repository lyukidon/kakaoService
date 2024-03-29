/* eslint react/self-closing-comp: 0 */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import List from "./List";
import Category from "./Category";

import "../../../scss/admin/article.scss";

// 관리자 컴포넌트
function Article({
    editor,
    faqData,
    ids,
    setIds,
    service,
    category,
    platform,
    article,
    setService,
    setCategory,
    setPlatform,
    setArticle,
    setStatistic,
    activateEditor,
    setActivateEditor,
    articleId,
    setArticleId,
    singleArti,
    setSingleArti,
    preview,
    setPreview,
    handleFunc,
}) {
    const changeStatistic = () => {
        if (setStatistic) {
            setStatistic({
                service: service.length,
                category: category.length,
                platform: platform.length,
                article: article.length,
            });
        }
    };
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
    useEffect(() => {
        changeStatistic();
    }, [service, category, platform, article]);

    const changeOption = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "service_id":
                setIds({
                    ...ids,
                    [name]: +value,
                    category_id: 0,
                    platform_id: 0,
                });
                break;
            case "category_id":
                setIds({ ...ids, [name]: +value, platform_id: 0 });
                break;
            case "platform_id":
                setIds({ ...ids, [name]: +value });
                break;
            default:
                return null;
        }
        changeStatistic();
        // 우측 정리하기
        setArticleId(-1);
        setActivateEditor(false);
        setPreview(false);
        setSingleArti({
            content: "",
            explain: "",
        });
    };
    // 삭제 관련
    const [chkTrash, setChkTrash] = useState(false);
    // 카테고리 설정 관련
    const [toggleSetting, onToggleSetting] = useState(false);
    return (
        <div className="article">
            {/* 제목 */}
            {!editor ? (
                <div className="titleNlink">
                    <h4>도움말 목록</h4>
                    <Link to="/admin/faq">
                        <h4>
                            더보기
                            <FontAwesomeIcon
                                className="rightArrow"
                                icon="fa-solid fa-angle-right"
                                size="lg"
                            />
                        </h4>
                    </Link>
                </div>
            ) : (
                <h4 style={{"margin-top":"5px"}}>도움말 관리</h4>
            )}

            {/* 카테고리 선택 */}
            <div className="selectBox">
                <div>
                    <div className="serviceSelect">
                        <div>
                            <select
                                name="service_id"
                                onChange={(event) => changeOption(event)}
                            >
                                <option value={0}>전체</option>
                                {service &&
                                    service.map((c) => (
                                        <option
                                            key={c.content}
                                            id="service_id"
                                            value={c.service_id}
                                        >
                                            {c.content}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </div>
                    {ids.service_id !== 0 && (
                        <>
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            <div className="categorySelect">
                                <div>
                                    <select
                                        name="category_id"
                                        onChange={(event) =>
                                            changeOption(event)
                                        }
                                    >
                                        {ids.service_id !== 0 && (
                                            <option value={0}>전체</option>
                                        )}
                                        {category.map((c) => (
                                            <option
                                                key={c.content}
                                                id="category_id"
                                                value={c.category_id}
                                            >
                                                {c.content}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </>
                    )}
                    {ids.category_id !== 0 && (
                        <>
                            <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                            <div className="platformSelect">
                                <div>
                                    <select
                                        name="platform_id"
                                        onChange={(event) =>
                                            changeOption(event)
                                        }
                                    >
                                        {ids.category_id !== 0 && (
                                            <option value={0}>전체</option>
                                        )}
                                        {platform.map((c) => (
                                            <option
                                                key={c.content}
                                                id="platform_id"
                                                value={c.platform_id}
                                            >
                                                {c.content}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                {editor && (
                    <div>
                        <button
                            type="button"
                            onClick={() => {
                                setPreview(false);
                                setArticleId(faqData.article.length);
                                setActivateEditor(!activateEditor);
                                setSingleArti({...singleArti,
                                    content: "",
                                    explain: "",
                                });
                            }}
                        >
                            <FontAwesomeIcon icon="fa-solid fa-plus" />
                            도움말 추가
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                onToggleSetting(true);
                            }}
                            title="카테고리 설정"
                        >
                            <FontAwesomeIcon icon="fa-solid fa-gear" />
                        </button>
                    </div>
                )}
            </div>
            {toggleSetting && (
                <Category
                    onToggleSetting={onToggleSetting}
                />
            )}
            <div>
                {/* 도움말 목록 */}
                <List
                    handleFunc={handleFunc}
                    editor={editor}
                    service={service && service}
                    category={category && category}
                    platform={platform && platform}
                    activateEditor={activateEditor}
                    setActivateEditor={setActivateEditor}
                    article={article}
                    setArticle={setArticle}
                    articleId={articleId}
                    setArticleId={setArticleId}
                    chkTrash={chkTrash}
                    setChkTrash={setChkTrash}
                    preview={preview}
                    setPreview={setPreview}
                    singleArti={singleArti && singleArti}
                    setSingleArti={setSingleArti}
                />
            </div>
        </div>
    );
}

export default Article;
