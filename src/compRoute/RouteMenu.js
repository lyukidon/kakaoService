// library
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { setService, setCategory } from '../modules/breadCrumb';
import { setOS } from '../modules/osType';
// component
import BreadCrumbs from '../comp-root/BreadCrumbs';
import SideMenu from '../comp-details/SideMenu';
import Detail from '../comp-details/Detail';

export default ()=>{
    const dispatch = useDispatch();
    // Redux store 에서 데이터 변경하기 (useState처럼);
	// side버튼 누르면 os선택 값을 0으로 하기 위해 추가
    const onSetOS=(idx)=> {
        dispatch(setOS(idx));
    }

	const [query,setQuery]=useState({
		service:0,
		category:0
	})
	const onQuery=()=>{
		const data = qs.parse(location.search,{ ignoreQueryPrefix:true })
		onSetOS(0)
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
				classify:'',
			});
    const [platform, setPlatform]=useState([]);
    const [content,setContent]=useState([]);
	useEffect(()=>{
		onQuery()
	},[]);
	useEffect(()=>{
		axios.get('/data/detailData.json')
			.then(res => {
				// side
				const side=res.data.filter(c => c.service == service)[0];
				const name =  side.service_name;
				const sidemenus = side.data.reduce((arr,data) => [...arr, {
					"title": data.classify,
					"category": data.category,
				}], []);
				setServices({
					...services,
					service: side.service,
					name: name
				})
				setMenus([
					...sidemenus
				])
				// detail
				const detail=side.data.filter(c=>c.category == category)[0];
				setTipsData({
					...tipsData,
					classify: detail.classify,
				})
				setPlatform([ ...detail.platform])
				setContent([ ...detail.contents])
			})
	},[query])

	return(
		<div>
			<BreadCrumbs />
			<div className='common-width'>
				<SideMenu 
					onQuery={onQuery} 
					service={services.service}
					name={services.name} 
					menus={menus}
				/>
				<Detail 
					tipsData={tipsData} 
					content={content} 
					platform={platform} 
				/>
			</div>
		</div>
	)
}