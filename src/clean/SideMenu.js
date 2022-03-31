import React, { useEffect, useState } from 'react';
import qs from 'qs';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

function SideMenu() {
    const query=qs.parse(useLocation().search, {ignoreQueryPrefix:true})
    const [service,setService]=useState('');
    const [category, setCategory]=useState([]);

    useEffect(()=>{
        axios.get('/data/clean.json')
        .then(res => {
            setService(res.data.service[query.service])
            setCategory([...res.data.category[query.service]])
        })
    },[])

    return (
        <div>
            <div>{service}</div>
            {category.map((data,index) => (
                <Link
                    key={data}
                    to={`?service=${query.service}&category=${index}`}
                >{data}</Link>
            ))}
        </div>
    );
}

export default SideMenu;