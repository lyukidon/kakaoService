import React, { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Request from '../comp-request/Request';

function SideMenu({name, menus, service}){
    return(
        <div>
            <div>
                {name}
            </div>
            {menus.map(data => {
                const menuurl=`/helps?service=${service}&category=${data.category}`;
                return(
                    <NavLink to={menuurl}>
                        {data.title}
                    </NavLink>
                )
            })}
        </div>
    )
}

function RouteRequest() {
    const query = qs.parse(location.search,{ ignoreQueryPrefix:true });
    const { breadCrumb }=useSelector(state=>state);
    const { service_name, service }=breadCrumb;
    const [menus, setMenus]=useState([]);
    // useEffect(()=>{
    //         axios.get('/data/detailData.json')
    //             .then(res => {
    //                 setMenus([...res.data])
    //             })
    //             .then(
    //                 setMenus([
    //                     ...menus.filter(data => data.service === query.service)[0].data.reduce((a,c)=>{
    //                         a.push(c.classify);
    //                         return a;
    //                     },[])
    //                 ])

    //             )
    //     console.log(menus);
    // },[service])// service가 비동기로 받아와지고 돌아가기 시작하도록 함
    return (
        <div>
            <SideMenu
                name={service_name}
                menus={menus}
                service={service}
            />
			<Request />
        </div>
    );
}

export default RouteRequest;
