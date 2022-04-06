import React from 'react';
import qs from 'qs';
import { useLocation } from 'react-router-dom';

import Request from '../components/request/Request';
import BreadCrumbs from '../components/faq/BreadCrumbs';
import SideMenu from '../components/faq/SideMenu';

function RouteReq() {
    const query=qs.parse(useLocation().search, {ignoreQueryPrefix:true})
    return (
        <div className='common-width'>
            <BreadCrumbs query={query} />
            <SideMenu query={query} />
            <Request query={query} />
        </div>
    );
}

export default RouteReq;