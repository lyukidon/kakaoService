import React from 'react';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';

import SideMenu from '../comp-details/SideMenu';
import Request from '../comp-request/Request';
import BreadCrumbs from '../comp-root/BreadCrumbs';


function RouteRequest() {
    const dispatch=useDispatch();
    const { query, side }=useSelector(state => state);
    const onQuery=()=>{
		const data = qs.parse(location.search,{ ignoreQueryPrefix:true })
		onSetQuery({
			service: data.service,
			category: data.category,
			platform: data.platform,
			articleId: data.articleId,
		})
	}
    return (
        <div>
            <BreadCrumbs onQuery={onQuery}/>
            <div className='common-width'>
                <SideMenu
                    onQuery={onQuery}
                    side={side}
                />
                <Request />
            </div>
        </div>
    );
}

export default RouteRequest;
