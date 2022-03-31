import React from 'react';

import Detail from './Detail';
import SideMenu from './SideMenu';
import BreadCrumbs from './BreadCrumbs';

function RouteClean() {
    return (
        <div>
            <BreadCrumbs />
            <SideMenu />
            <Detail />
        </div>
    );
}

export default RouteClean;