import React, { useEffect, useReducer, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

import { TopNav, SideNav } from "../components/admin/Nav";
import Graph from "../components/admin/Graph";
import EditArticle from "../components/admin/EditArticle";
import ShowRequest from "../components/admin/ShowRequest";

import "../scss/admin/admin.scss";

function reducer(state, action) {
    switch (action.type) {
        case "LOADING":
            return {
                loading: true,
                data: null,
                error: null,
            };
        case "SUCCESS":
            return {
                loading: false,
                data: action.data,
                error: null,
            };
        case "ERROR":
            return {
                loading: false,
                data: null,
                error: action.error,
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function Admin() {
    const params = useParams();
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
    });

    const getfaq = async () => {
        dispatch({ type: "LOADING" });
        try {
            const response = await axios.get("/data/faq_temp.json");
            dispatch({ type: "SUCCESS", data: response.data });
        } catch (err) {
            dispatch({ type: "ERROR", error: err });
        }
    };
    useEffect(() => {
        getfaq();
    }, []);
    const { data } = state;

    // Nav 누르면 스크롤
    const scrollRef = useRef([]);

    return (
        <div className="admin">
            <Helmet>
                <html lang="en" className="adminHtml" />
            </Helmet>
            <TopNav params={params} ref={scrollRef} />
            <div className="contents">
                <SideNav />
                <div className="dashboard">
                    <Graph ref={scrollRef} />
                    <ShowRequest ref={scrollRef} />
                    <EditArticle faqData={data} ref={scrollRef} />
                </div>
            </div>
        </div>
    );
}
export default Admin;
