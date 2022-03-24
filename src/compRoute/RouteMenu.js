// library
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useSelector,useDispatch } from 'react-redux';
import { setOS } from '../modules/osType';
import { setCategory, setMenuArr } from '../modules/breadCrumb';
// component
import BreadCrumbs from '../comp-root/BreadCrumbs';
import UsefulTips from '../comp-details/UsefulTips';
import SideMenu from '../comp-details/SideMenu';
import Detail from '../comp-details/Detail';

export default ()=>{
	const store=useSelector(state=>state.breadCrumb)
    const dispatch = useDispatch();
    // Redux store 에서 데이터 변경하기 (useState처럼);
	// side버튼 누르면 os선택 값을 0으로 하기 위해 추가
    const onSetOS=(idx)=> {
        dispatch(setOS(idx));
    }
	const onCategory=(category, name)=> dispatch(setCategory(category, name));
	const onMenuArr=(menu)=> dispatch(setMenuArr(menu))
	const [query,setQuery]=useState({
		service:0,
		category:undefined,
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
	const [menus, setMenus]=useState([]);
	
	const [useful,setUseful]=useState([]);
	//detail data
	const [tipsData, setTipsData]=useState({
		classify:'',
	});
    const [platform, setPlatform]=useState([]);
    const [content,setContent]=useState([]);
	useEffect(()=>{
		onQuery()
		onMenuArr(menus);
	},[]);
	useEffect(()=>{
		axios.get('/data/detailData.json')
		.then(res => {
			// side
				const side=res.data.filter(c => c.service == service)[0];
				const name=side.service_name;
				const sidemenus=side.data.reduce((arr,data) => [...arr, {
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
				// usefultips
				let arrAllContent=[]
				for (let i=0;i<side.data.length;i++){
					for (let j=0;j<side.data[i].contents.length;j++){
						for (let k=0;k<side.data[i].contents[j].length;k++){
							// console.log('i: ', i, ' j: ',j,' k: ', k)
							arrAllContent.push(side.data[i].contents[j][k]);
						}
					}
				}
				let arr=[];
				for (let i=0;i<10;i++){
					arr.push(arrAllContent[Math.floor(Math.random() * arrAllContent.length)]);
				}
				
				setUseful( [...arr] );
				// detail
				if (category){
					const detail=side.data.filter(c=>c.category == category)[0];
					setTipsData({
						...tipsData,
						classify: detail.classify,
					})
					setPlatform([ ...detail.platform])
					setContent([ ...detail.contents])
				}
			})
			query.category === undefined && onCategory(undefined, '유용한 도움말')
	},[query])
	return(
		<div>
			<BreadCrumbs onQuery={onQuery} />
			<div className='common-width'>
				<SideMenu 
					onQuery={onQuery} 
					service={services.service}
					name={services.name}
					menus={menus}
				/>
				{
					query.category === undefined ?
					<UsefulTips useful={useful} />
					:
					<Detail 
						usefulCheck={false}
						tipsData={tipsData} 
						content={content} 
						platform={platform} 
					/>
				}
			</div>
		</div>
	)
}