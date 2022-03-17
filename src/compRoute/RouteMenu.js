import React, { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import SideMenu from '../comp-details/SideMenu';

export default ({loaction})=>{
	const query=qs.parse(location.search, {
		ignoreQueryPrefix:true
	});
	const [services, setNServices]=useState({
		services:0,
		name:'',
	})
	const [menus, setMenus]=useState([])
	useEffect(()=>{
		axios.get('data/sideMenuData.json')
		.then(res=> {
			const data=res.data.filter(c => c.service == query.service)
			setName(data[0].name)
			setMenus([
				...menus,
				...data[0].menus
			])
		})

	},[])
	
	return(
		<div>
			<SideMenu service={services.service} name={services.name} menus={menus} />
		</div>
	)
}