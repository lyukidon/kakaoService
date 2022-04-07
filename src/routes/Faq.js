import React from "react";
import qs from "qs";
import { useLocation } from "react-router-dom";

import Option from "../components/layout/Top";
import Header from "../components/layout/Header";
import Detail from "../components/faq/Detail";
import SideMenu from "../components/layout/SideMenu";
import BreadCrumbs from "../components/layout/BreadCrumbs";
import RandomPick from "../components/faq/RandomPick";

import "../scss/faq/faq.scss";

function RouteFaq() {
    const query = qs.parse(useLocation().search, { ignoreQueryPrefix: true });

    return (
        <div>
            <Option />
            <Header />
            <div className="common-width">
                <BreadCrumbs query={query} />
                <SideMenu query={query} />
                {query.category ? <Detail query={query} /> : <RandomPick />}
            </div>
        </div>
    );
}

export default RouteFaq;
