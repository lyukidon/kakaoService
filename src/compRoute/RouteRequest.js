import React from 'react';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery } from '../modules/query';

import SideMenu from '../comp-details/SideMenu';
import Request from '../comp-request/Request';
import BreadCrumbs from '../comp-root/BreadCrumbs';


function RouteRequest() {
    const { side }=useSelector(state => state);
    const dispatch=useDispatch();
    const onSetQuery=(data)=>dispatch(setQuery(data))
    const onQuery=()=>{
		const data = qs.parse(window.location.search,{ ignoreQueryPrefix:true })
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
