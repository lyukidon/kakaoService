import React,{useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../../scss/main/Sub.scss';

function MenuData({url, title}){
    return(
        <div className='Menu inlineBlock'>
                <a href={url}>{title} <div className='rightwards-arrow' /></a>
        </div>
    )
}
MenuData.propTypes={
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

function Menu({classification, subdata}){
    return(
        <div className='SubMenu inlineBlock'>
            <h3>{classification}</h3>
            {subdata.map((menudata)=>(
                <MenuData 
                    key={menudata.id} 
                    url='#'
                    title={menudata.title}
                />
            ))}
        </div>
    )
}
Menu.propTypes={
    classification: PropTypes.string.isRequired,
    subdata: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        url: PropTypes.string,
    })).isRequired
}

function Sub() {
    const [sub,setSub]=useState([]);
    useEffect(()=>{
        axios.get('/data/sub.json')
            .then((res)=> setSub(res.data))
            .catch((err)=>console.error(err));
    },[])
    return (
        <div className='Sub common-width'>
            {sub.map((data)=>{
                const {classification,subdata}=data
                return(
                    <Menu 
                        key={data.id} 
                        classification={classification}
                        subdata={subdata}
                    />
                );
            })}
        </div>
    );
}

export default Sub;