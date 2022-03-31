import React, { useState, useEffect } from 'react';
import qs from 'qs';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Detail() {

    const query=qs.parse(useLocation().search, {ignoreQueryPrefix:true})
    const [category,setCategory]=useState([])
    const [platform,setPlatform]=useState([]);
    const [article, setArticle]=useState([]);

    useEffect(()=>{
        axios.get('/data/clean.json')
        .then(res => {
            setCategory([...res.data.category[query.service]])
            setPlatform([...res.data.platform[query.service][query.category]])
            setArticle([...res.data.article[query.service][query.category]])
        })
    },[])


    return (
        <div>
            <div>
                {article}
            </div>
            {/* {
                query.platform ?
                
            } */}
        </div>
    );
}

export default Detail;