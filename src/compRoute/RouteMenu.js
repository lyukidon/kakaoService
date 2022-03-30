// library
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../modules/breadCrumb';
import { setQuery } from '../modules/query';
import { setSide } from '../modules/side';
// component
import BreadCrumbs from '../comp-root/BreadCrumbs';
import UsefulTips from '../comp-details/UsefulTips';
import SideMenu from '../comp-details/SideMenu';
import Detail from '../comp-details/Detail';

export default ()=>{
    const dispatch = useDispatch();
    // Redux 데이터 변경 함수
	const onCategory=(category, name)=> dispatch(setCategory(category, name));
	const onSetQuery=(object)=>dispatch(setQuery(object));
	const onSide=(object)=>{console.log('im running');dispatch(setSide(object))};
	//redux 불러오기 (쿼리스트링, 사이드 메뉴)
	const { query, side }=useSelector(state => state);
	const { service, category }=query;
	// query string 받기, redux 데이터 변형
	const onQuery=()=>{
		const data = qs.parse(location.search,{ ignoreQueryPrefix:true })
		onSetQuery({
			service: data.service,
			category: data.category,
			platform: data.platform,
			articleId: data.articleId,
		})
	}
	//유용한 도움말 데이터
	const [useful,setUseful]=useState([]);
	// 세부설명 데이터
    const [platform, setPlatform]=useState([]);
    const [content,setContent]=useState([]);
	useEffect(()=>{
		onQuery()
	},[]);
	useEffect(()=>{
		axios.get('/data/detailData.json')
		.then(res => {
			// side
			const serviceData=res.data.filter(c => c.service == service)[0];
			return serviceData;
		}).then(serviceData=>{
			const name=serviceData.service_name;
			const sideCategoryGroup=serviceData.data.reduce((arr,cur) => [
				...arr, 
				cur.classify
			],[]);
			onSide({
				service: serviceData.service,
				name: name,
				category: [...sideCategoryGroup],
			})
			// 세부 설명 글 전부 모으기
			let arrAllContent=[]
			for (let i=0;i<serviceData.data.length;i++){
				for (let j=0;j<serviceData.data[i].contents.length;j++){
					for (let k=0;k<serviceData.data[i].contents[j].length;k++){
						// console.log('i: ', i, ' j: ',j,' k: ', k)
						arrAllContent.push(serviceData.data[i].contents[j][k]);
					}
				}
			}
			let arr=[];
			// 랜덤 선택
			for (let i=0;i<10;i++){
				arr.push(arrAllContent[Math.floor(Math.random() * arrAllContent.length)]);
			}
			setUseful( [...arr] );
			// detail
			if (category){
				const detail=serviceData.data.filter(c=>c.category == category)[0];
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
				{console.log(side)}
				<SideMenu 
					onQuery={onQuery}
					side={side}
				/>
				{query.category === undefined ?
					<UsefulTips useful={useful} />
					:
					<Detail 
						onQuery={onQuery}
						usefulCheck={false}
						categoryName={side.category[query.category]} 
						content={content} 
						platform={platform} 
					/>
				}
			</div>
		</div>
	)
}