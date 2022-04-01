import React, { useState, useEffect } from 'react';
import qs from 'qs';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

function Content({ query }){
    const [article, setArticle]=useState([]);

    useEffect(()=>{
        axios.get('/data/clean.json')
            .then(res => {
                if (query.category){
                    setArticle(
                        res.data.article[query.service][query.category][query.platform]
                    );
                }
            })
    },[query])


    return(
        <div className='contentBox'>
            {
                article.map((data, index) => (
                    <div className='content' key={data.id}>
                        <div className="contentIndex">{index+1}</div>
                        <div className='contentLink'>
                            <Link
                                
                                to={`?service=${query.service}&category=${query.category}&platform=${query.platform}&articleId=${index}`}
                            >
                                {data.content}
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
Content.defaultProps={
    query:[]
}
Content.propTypes={
    query: PropTypes.shape({
        service:PropTypes.string,
        category:PropTypes.string,
        platform:PropTypes.string,
        articleId:PropTypes.string,
    })
}

function Detail() {

    const query=qs.parse(useLocation().search, {ignoreQueryPrefix:true})
    const [category,setCategory]=useState([])
    const [platform,setPlatform]=useState([]);

    useEffect(()=>{
        axios.get('/data/clean.json')
        .then(res => {
            setCategory([...res.data.category[query.service]]);
            setPlatform([...res.data.platform[query.service]]);
        })
    },[])
    return (
        <div className='detail'>
            <div className='categoryName'>
                {category[query.category]}
            </div>
            <div className='platformBox'>
                {platform[query.category] && platform[query.category].map((data, index, arr) => (
                    <div key={data}>
                        <Link 
                            key={data}
                            to={`?service=${query.service}&category=${query.category}&platform=${index}`}
                        >
                            {data}
                        </Link>
                        {index+1 < arr.length && <div>•</div>}
                    </div>
                ))}
            </div>
            <Content query={query} />
        </div>
    );
}

export default Detail;