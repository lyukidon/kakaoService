import React, { useState, useEffect, useRef } from 'react';
import qs from 'qs';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import RequestBtn from './RequestBtn';

function Explain({ query, data, index }){
    const active=`?service=${query.service}&category=${query.category}&platform=${query.platform}`
    const inactiveUrl=`?service=${query.service}&category=${query.category}&platform=${query.platform}&articleId=${index}`
    return(
        <div id={`article${index}`} className='content' key={data.id}>
            <div className="contentIndex">{index+1}</div>
            <div className='contentLink'>
                <Link to={query.articleId && +query.articleId === index ? active : inactiveUrl}>
                    <div className={+query.articleId === index ? 'activate':'inactivate'}>
                        {data.content}
                    </div>
                </Link>
                {+query.articleId === index &&
                    <div>{data.explain}</div>
                }
            </div>
        </div>
    )
}
Explain.defaultProps={
    query:[],
    data:{},
}
Explain.propTypes={
    query: PropTypes.shape({
        service:PropTypes.string,
        category:PropTypes.string,
        platform:PropTypes.string,
        articleId:PropTypes.string,
    }),
    data: PropTypes.shape({
        id: PropTypes.number,
        content: PropTypes.string.isRequired,
        explain: PropTypes.string.isRequired,
    }),
    index: PropTypes.number.isRequired,
}


function Content({ query }){
    const [article, setArticle]=useState([]);

    useEffect(()=>{
        axios.get('/data/faq.json')
            .then(res => {
                if (query.platform){
                    setArticle(
                        res.data.article[query.service][query.category][query.platform]
                    );
                }else{
                    setArticle(
                        res.data.article[query.service][query.category][0]
                    );
                }
            })
    },[query.platform, query.category])

    const positionRef=useRef([]);

    useEffect(()=>{
        if(positionRef.current.length !== 0 && query.articleId){
            positionRef.current[query.articleId].scrollIntoView();
        }
    },[query])

    return(
        <div className='contentBox'>
            {
                article.map((data, index) => (
                    <div
                        key={data.id}
                        ref={ element => {positionRef.current[index] = element} }
                    >
                        <Explain 
                            query={query} 
                            data={data} 
                            index={index}
                        />
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
        axios.get('/data/faq.json')
            .then(res => {
                setCategory([...res.data.category[query.service]]);
                setPlatform([...res.data.platform[query.service]]);
            })
    },[]);

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
                            className={+query.platform === index && 'active' }
                            to={`?service=${query.service}&category=${query.category}&platform=${index}`}
                        >
                            {data}
                        </Link>
                        {index+1 < arr.length && <div>•</div>}
                    </div>
                ))}
            </div>
            <Content query={query} />
            <RequestBtn query={query}/>
        </div>
    );
}

export default Detail;