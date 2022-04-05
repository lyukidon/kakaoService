import React from 'react';
import qs from 'qs';
import { useLocation } from 'react-router-dom';

import Detail from '../faq/Detail';
import SideMenu from '../faq/SideMenu';
import BreadCrumbs from '../faq/BreadCrumbs';
import RandomPick from '../faq/RandomPick';

import '../faq/faq.scss';

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