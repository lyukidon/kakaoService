import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import { TopNav, SideNav } from "../components/admin/Nav/Index";
import Graph from "../components/admin/Graph";
import Article from "../components/admin/Article/Index";
import ShowRequest from "../components/admin/ShowRequest";

import "../scss/admin/admin.scss";
import ArticleStatics from "../components/admin/ArticleStatics";

function Admin({ data }) {
    const params = useParams();
    const [statistic, setStatistic] = useState({
        service: 0,
        category: 0,
        platform: 0,
        article: 0,
    });
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
                    <Article faqData={data} setStatistic={setStatistic} />
                </div>
            </div>
        </div>
    );
}

export default Admin;
