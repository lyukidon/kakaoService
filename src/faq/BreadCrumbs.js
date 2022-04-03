import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

function BreadCrumbs({ query }){
    const [service,setService]=useState('');
    const [category, setCategory]=useState([]);

    useEffect(()=>{
        axios.get('/data/faq.json')
        .then(res => {
            setService(res.data.service[query.service])
            if (query.category){
                setCategory([...res.data.category[query.service][query.category]])
            }
        })
    },[query])
    return (
        <div className='breadcrumb'>
            <Link to='/'>홈</Link>
            <div className='right-arrow'/>
            <Link
                to={`?service=${query.service}`}
            >{service}</Link>
            <div className='right-arrow'/>
            {query.category ?
                <Link
                    to={`?service=${query.service}&category=${query.category}`}
                >
                    {category}
                </Link>
                :
                <span >유용한 도움말</span>
            }
                
        </div>
    );
}
BreadCrumbs.defaultProps={
    query:[]
}
BreadCrumbs.propTypes={
    query: PropTypes.shape({
        service:PropTypes.string,
        category:PropTypes.string,
        platform:PropTypes.string,
        articleId:PropTypes.string,
    })
}

export default BreadCrumbs;