import React from "react";
import qs from "qs";
import { useLocation } from "react-router-dom";

import Top from "../components/layout/Top";
import Header from "../components/layout/Header";
import Request from "../components/request/Request";
import BreadCrumbs from "../components/layout/BreadCrumbs";
import SideMenu from "../components/layout/SideMenu";
import Footer from "../components/layout/Footer";

function RouteReq() {
    const query = qs.parse(useLocation().search, { ignoreQueryPrefix: true });

    return (
        <div>
            <Top />
            <Header />
            <div className="common-width">
                <BreadCrumbs query={query} />
                <SideMenu query={query} />
                <Request query={query} />
            </div>
            <Footer />
        </div>
    );
}

export default RouteReq;
