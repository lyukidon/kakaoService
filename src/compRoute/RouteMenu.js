// library
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';
// component
import Notice from '../comp-root/Notice';
import SideMenu from '../comp-details/SideMenu';
import Detail from '../comp-details/Detail';

export default ()=>{
	const [query,setQuery]=useState({
		service:0,
		category:0
	})
	const onQuery=()=>{
		console.log(location.search)
		const data = qs.parse(location.search,{ ignoreQueryPrefix:true })
		setQuery({
			...query,
			service: data.service,
			category: data.category,
		})
	}
	const { service, category }=query
	// side data
	const [services, setServices]=useState({
				service:0,
				name:'',
			})
	const [menus, setMenus]=useState([])

	//detail data
	const [tipsData, setTipsData]=useState({
				lang: '',
				classify:'',
			});
    const [platform, setPlatform]=useState([]);
    const [content,setContent]=useState([]);
	useEffect(()=>{
		onQuery()
	},[]);
	useEffect(()=>{
		axios.get('/data/sideMenuData.json')
			.then(res=> {
				const data=res.data.filter(c => c.service == service)[0]
				setServices({
					...services,
					service: data.service,
					name: data.name
				})
				setMenus([
			
					...data.menus
				])
			})

		axios.get('/data/detailData.json')
			.then(res=>{
				const object=res.data.filter(c=>c.category == category)[0]
				setTipsData({
					...tipsData,
					lang: object.lang,
					classify: object.classify,
				})
				setPlatform([ ...object.platform])
				setContent([ ...object.contents])
			});
		},[query])

	return(
		<div>
			<Notice />
			<SideMenu onQuery={onQuery} service={services.service} name={services.name} menus={menus} />
			<Detail tipsData={tipsData} content={content} platform={platform} />
		</div>
	)
}