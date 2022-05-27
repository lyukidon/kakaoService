import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import { TopNav, SideNav } from "../components/admin/Nav/Index";
import Graph from "../components/admin/Graph";
import Article from "../components/admin/Article/Index";
import ShowRequest from "../components/admin/ShowRequest";

import "../scss/admin/admin.scss";
import ArticleStatics from "../components/admin/ArticleStatics";

function Admin({ faqData }) {
    const params = useParams();
    const [statistic, setStatistic] = useState({
        service: 0,
        category: 0,
        platform: 0,
        article: 0,
    });
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
    return (
        <div>
            <Helmet>
                <body className="adminBody" />
            </Helmet>
            <TopNav params={params} />
            <div className="contents">
                <SideNav />
                <div className="dashboard">
                    <Graph />
                    <ShowRequest />
                    <ArticleStatics statistic={statistic} />
                    <Article
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
                        setStatistic={setStatistic}
                    />
                </div>
            </div>
        </div>
    );
}

export default Admin;
