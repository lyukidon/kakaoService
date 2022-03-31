import React, { useState, useEffect } from 'react';
import qs from 'qs';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

function Detail() {

    const query=qs.parse(useLocation().search, {ignoreQueryPrefix:true})
    const [category,setCategory]=useState([])
    const [platform,setPlatform]=useState([]);
    const [article, setArticle]=useState([]);

    useEffect(()=>{
        axios.get('/data/clean.json')
        .then(res => {
            setCategory([...res.data.category[query.service]]);
            setPlatform([...res.data.platform[query.service]]);
            setArticle([...res.data.article[query.service]]);
        })
    },[])
    return (
        <div>
            <div>
                {category[query.category]}
            </div>
            {console.log(platform[query.category].map())}
            {/* {platform[query.category].map((data, index) => (
                <Link 
                    key={data}
                    to={`?service=${query.service}&category=${query.category}&platform=${index}`}
                >
                    {data}
                </Link>
            ))} */}
        </div>
    );
}

export default Detail;