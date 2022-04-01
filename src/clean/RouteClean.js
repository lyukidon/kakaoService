import React from 'react';
import qs from 'qs';
import { useLocation } from 'react-router-dom';

import Detail from './Detail';
import SideMenu from './SideMenu';
import BreadCrumbs from './BreadCrumbs';
import RandomPick from './RandomPick';

import './clean.scss';

function RouteClean() {
    const query=qs.parse(useLocation().search, {ignoreQueryPrefix:true})

    return (
        <div className='common-width'>
            <BreadCrumbs query={query} />
            <SideMenu query={query} />
            {
                query.category ?
                <Detail query={query} />
                :
                <RandomPick />
            }
        </div>
    );
}

export default RouteClean;