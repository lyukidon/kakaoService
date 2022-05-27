import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";

import { TopNav, SideNav } from "../components/admin/Nav/Index";
import Editor from "../components/admin/Editor/Index";
import Article from "../components/admin/Article/Index";

import "../scss/admin/webEditor.scss";

function AdminFaq({ faqData }) {
    // 에디터인지 아닌지 확인하기
    const [activateEditor, setActivateEditor] = useState(false);
    // 수정 버튼 클릭 시 확인 및 데이터
    const [articleId, setArticleId] = useState(-1);
    const [singleArti, setSingleArti] = useState(null);
    // 미리보기
    const [preview, setPreview] = useState(false);
    const handleFunc = (dataTmp, bool, setfunc) => {
        if (!bool) {
            setfunc(true);
            setArticleId(dataTmp.article_id);
            setSingleArti({ ...dataTmp });
        } else {
            if (articleId === dataTmp.article_id) {
                setfunc(false);
                setArticleId(-1);
            } else {
                setArticleId(dataTmp.article_id);
                setSingleArti({ ...dataTmp });
            }
        }
    };
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
    }, [faqData]);
    return (
        <div>
            <Helmet>
                <body className="adminBody" />
            </Helmet>
            <TopNav />
            <div className="contents">
                <SideNav />
                <div className="editorPage">
                    <Article
                        editor
                        faqData={faqData}
                        ids={ids}
                        setIds={setIds}
                        service={service}
                        setService={setService}
                        category={category}
                        setCategory={setCategory}
                        platform={platform}
                        setPlatform={setPlatform}
                        article={article}
                        setArticle={setArticle}
                        activateEditor={activateEditor}
                        setActivateEditor={setActivateEditor}
                        articleId={articleId}
                        setArticleId={setArticleId}
                        singleArti={singleArti}
                        setSingleArti={setSingleArti}
                        preview={preview}
                        setPreview={setPreview}
                        handleFunc={handleFunc}
                    />
                    <Editor
                        setIds={setIds}
                        service={service}
                        setService={setService}
                        category={category}
                        setCategory={setCategory}
                        platform={platform}
                        setPlatform={setPlatform}
                        article={article}
                        setArticle={setArticle}
                        activateEditor={activateEditor}
                        setActivateEditor={setActivateEditor}
                        singleArti={singleArti}
                        preview={preview}
                        setPreview={setPreview}
                        articleId={articleId}
                        setArticleId={setArticleId}
                    />
                </div>
            </div>
        </div>
    );
}

export default AdminFaq;
