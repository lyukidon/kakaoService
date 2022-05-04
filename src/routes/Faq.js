import React, { useState, useEffect } from "react";
import qs from "qs";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Option from "../components/layout/Top";
import Header from "../components/layout/Header";
import Detail from "../components/faq/Detail";
import SideMenu from "../components/layout/SideMenu";
import BreadCrumbs from "../components/layout/BreadCrumbs";
import RandomPick from "../components/faq/RandomPick";
import Footer from '../components/layout/Footer';

import "../scss/faq/faq.scss";

function RouteFaq() {
    const query = qs.parse(useLocation().search, { ignoreQueryPrefix: true });
    const [faqData, setFaqData] = useState({});

    useEffect(() => {
        axios
            .get("/data/faq_temp.json")
            .then((res) => setFaqData({ ...faqData, ...res.data }));
    }, []);

    return (
        <div>
            <Option />
            <Header />
            <div className="common-width">
                <BreadCrumbs query={query} faqData={faqData} />
                <SideMenu query={query} faqData={faqData} />
                {query.category ? <Detail query={query} /> : <RandomPick />}
            </div>
            <Footer />
        </div>
    );
}

export default RouteFaq;
