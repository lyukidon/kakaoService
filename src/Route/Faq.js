import React from 'react';
import qs from 'qs';
import { useLocation } from 'react-router-dom';

import Detail from '../components/faq/Detail';
import SideMenu from '../components/faq/SideMenu';
import BreadCrumbs from '../components/faq/BreadCrumbs';
import RandomPick from '../components/faq/RandomPick';

import '../scss/faq/faq.scss';

function RouteFaq() {
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

export default RouteFaq;