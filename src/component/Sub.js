import React,{useState, useEffect} from 'react';
import axios from 'axios';
import '../scss/Sub.scss'
import '../common.scss'

function MenuData({url, title}){
    return(
        <div className='Menu inlineBlock'>
                <a href={url}>{title} {">"}</a>
        </div>
    )
}

function Menu({ data }){
    const {classification, subdata}=data;
    return(
        <div className='SubMenu inlineBlock'>
            <h3>{classification}</h3>
            {subdata.map((menudata)=>(
                <MenuData 
                    key={menudata.id} 
                    url={menudata.url} 
                    title={menudata.title}
                />
            ))}
        </div>
    )
}

function Sub() {
    const [sub,setSub]=useState([]);
    useEffect(()=>{
        axios.get('/data/subData.json')
            .then((res)=> setSub(res.data))
            .catch((err)=>console.error(err));
    },[])
    return (
        <div className='Sub common-width'>
            {sub.map((data)=>(
                <Menu key={data.id} data={data}/>
            ))}
        </div>
    );
}

export default Sub;