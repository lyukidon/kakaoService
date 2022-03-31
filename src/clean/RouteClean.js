import React from 'react';
import qs from 'qs';
import { useLocation } from 'react-router-dom';

import Detail from './Detail';
import SideMenu from './SideMenu';
import BreadCrumbs from './BreadCrumbs';

function RouteClean() {
    const query=qs.parse(useLocation().search, {ignoreQueryPrefix:true})

    return (
        <div>
            <BreadCrumbs />
            <SideMenu />
            {
                query.category ?
                <Detail />
                :
                <div>유용한 도움말</div>
            }
        </div>
    );
}

export default RouteClean;