import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

import { TopNav, SideNav } from "../components/admin/Nav";
import Graph from "../components/admin/Graph";
import EditArticle from "../components/admin/Article";
import ShowRequest from "../components/admin/ShowRequest";

import "../scss/admin/admin.scss";

function Admin({ data }) {
    const params = useParams();
    return (
        <div className="admin">
            <Helmet>
                <body className="adminBody" />
            </Helmet>
            <TopNav params={params} />
            <div className="contents">
                <SideNav />
                <div className="dashboard">
                    <Graph />
                    <ShowRequest />
                    <EditArticle faqData={data} />
                </div>
            </div>
        </div>
    );
}
export default Admin;
