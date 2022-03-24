import React from 'react';
import axios from 'axios';
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
    const { breadCrumb }=useSelector(state=>state);
    const { service_name, menus, service }=breadCrumb;
    return (
        <div>
            {console.log(breadCrumb)}
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
