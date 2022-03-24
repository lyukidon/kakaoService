import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import SideMenu from '../comp-details/SideMenu';
import Request from '../comp-request/Request';

function RouteRequest() {
    const { breadCrumb }=useSelector(state=>state)
    return (
        <div>
			<Request />
			<div>안녕하세요</div>
        </div>
    );
}

export default RouteRequest;
