import React, {useEffect, useState} from 'react';
import axios from 'axios'

function MainAllMenu({ data }){
    return (
        <div className='MainAllMenu inlineBlock'>
            <div className='title'><b>{data.title}</b></div>
            {data.service.map((c,index)=>{
                const {serviceUrl,serviceName} = c
                return(
                    <div key={index} className='AllMenus'><a href={serviceUrl}>{serviceName}</a></div>
                )
            })}
        </div>
    );
}

function MainAll() {
    const [mainAllData,setMainAllData]=useState([])
    useEffect(()=>{
        axios.get('/data/mainAllData.json')
            .then((res)=> setMainAllData(res.data))
            .catch((err)=>console.error(err))
    },[])
    return (
        <div>
                {mainAllData.map((data,index)=>(
                    <MainAllMenu key={index} data={data}/>
                ))}
        </div>
    )
}

export default MainAll;