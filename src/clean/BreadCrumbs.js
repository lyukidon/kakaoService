import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import qs from 'qs';
import axios from 'axios';

function BreadCrumbs(){
    const query=qs.parse(useLocation().search, {ignoreQueryPrefix:true})
    const [service,setService]=useState('');
    const [category, setCategory]=useState([]);

    useEffect(()=>{
        axios.get('/data/clean.json')
        .then(res => {
            setService(res.data.service[query.service])
            setCategory([...res.data.category[query.service]])
        })
        console.log(query)
    },[])
    return (
        <div>
            <Link to={`/`}>홈</Link>
            <Link
                to={`?service=${query.service}`}
            >{service}</Link>
            {
                query.category ?
                <Link
                    to={`?service=${query.service}&category=${query.category}`}
                >
                    {category[query.category]}
                </Link>
                :
                <span>유용한 도움말</span>
            }
        </div>
    );
}

export default BreadCrumbs;