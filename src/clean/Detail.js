import React, { useState, useEffect } from 'react';
import qs from 'qs';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import RequestBtn from './RequestBtn';

function Explain({ query, data, index }){

    const [toggle, setToggle]=useState(false)
    useEffect(()=>{
        if (+query.articleId === +index+1){
            setToggle(!toggle)
        }
    },[])
    return(
        <div className='content' key={data.id}>
            <div className="contentIndex">{index+1}</div>
            <div className='contentLink'>
                <Link
                    onClick={()=>setToggle(!toggle)}
                    to={`?service=${query.service}&category=${query.category}&platform=${query.platform}${!toggle ? `&articleId=${index+1}`:``}`}
                >
                    <div className={toggle ? 'activate': 'inactivate'}>
                        {data.content}
                    </div>
                </Link>
                {toggle && 
                    <div className='explain'>
                        {data.explain}
                    </div>
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
        axios.get('/data/clean.json')
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
    },[query])


    return(
        <div className='contentBox'>
            {
                article.map((data, index) => (
                    <Explain key={data.id} query={query} data={data} index={index} />
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

            <RequestBtn query={query}/>
        </div>
    );
}

export default Detail;