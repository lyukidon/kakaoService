import React from 'react';
import qs from 'qs';
import { useLocation } from 'react-router-dom';

import Request from '../comp-request/Request';
import BreadCrumbs from './BreadCrumbs';
import SideMenu from './SideMenu';

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