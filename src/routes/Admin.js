import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import { TopNav, SideNav } from "../components/admin/Nav/Index";
import Graph from "../components/admin/Graph";
import Article from "../components/admin/Article";
import ShowRequest from "../components/admin/ShowRequest";

import "../scss/admin/admin.scss";

function Admin({ data }) {
    const params = useParams();
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
                    <Article faqData={data} />
                </div>
            </div>
        </div>
    );
}
export default Admin;
