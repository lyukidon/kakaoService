import React, { useEffect, useState } from 'react';
import qs from 'qs';
import axios from 'axios';
import styled from 'styled-components';

import breadCrumbs from './BreadCrumbs';
import Detail from './Detail';
import SideMenu from './SideMenu';
import BreadCrumbs from './BreadCrumbs';

function RouteClean() {
    // 전역 변수로 바꿔주기
    const [query, setQuery]=useState({
        service:undefined,
        category:undefined,
        platform:undefined,
        articleId:undefined,
    })
    // 쿼리 스트링 받아오기
    const onQuery=()=>{
        const new_qs=qs.parse(location.search,{ ignoreQueryPrefix:true });
        setQuery({...query,...new_qs});
    }

    const [service, setService]=useState([]);
    const [category, setCategory]=useState([]);
    const [platform, setPlatform]=useState([]);
    const [article, setArticle]=useState([]);

    useEffect(()=>{
        onQuery()
        axios.get('/data/detailData.json')
            .then(res => {
                const { data } = res;
                const serviceArr=data.reduce((arr, cur)=> [...arr, cur.service_name],[]);
                setService([...serviceArr]);
            //     return data;
            // })
            // .then(data => {
                const categoryArr=data.reduce((arr, cur)=> 
                    [   ...arr,
                        cur.data.reduce((a,c)=> [...a,c.classify],[])
                    ],[])
                setCategory([...categoryArr]);
                // return data;
            // })
            // .then(data => {
                const platformArr=data.reduce((arr, cur)=> 
                    [   ...arr,
                        cur.data.reduce((a,c)=> [...a,c.platform],[])
                    ],[])
                    setPlatform([...platformArr])
            //     return data;
            // })
            // .then(data => {
                const articleArr=data.reduce((arr, cur)=> 
                    [   ...arr,
                        cur.data.reduce((a,c)=> [...a,c.contents],[])
                    ],[]);
                setArticle([...articleArr]);
                // return data;
            })
    },[])

    return (
        <div>
            {/* {console.log(service, category, platform, article)}
            {console.log(query)} */}
            <BreadCrumbs
                query={query}
                onQuery={onQuery}
                service={service}
                category={category}
                article={article}
            />
            <SideMenu
                qeury={query}
                onQuery={onQuery}
                category={category}
            />
            <Detail
                qeury={query}
                onQuery={onQuery}
                platform={platform}
                article={article}
            />
        </div>
    );
}

export default RouteClean;