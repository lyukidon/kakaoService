import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

function MainAllMenu({ title, services }){
    return (
        <div className='MainAllMenu inlineBlock'>
            <div className='title'><b>{title}</b></div>
            {services.map((serviceData)=>{
                const {serviceName,id} = serviceData;
                return(
                    <div key={id} className='AllMenus'>
                        <a href='#;'>{serviceName}</a>
                    </div>
                )
            })}
        </div>
    );
}
MainAllMenu.defaultProps={
    title:'',
    services:[],
}
MainAllMenu.propTypes={
    title: PropTypes.string,
    services: PropTypes.arrayOf(PropTypes.shape({
        serviceName: PropTypes.string,
        serviceUrl: PropTypes.string,
    })),    
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
                {mainAllData.map((data)=>(
                    <MainAllMenu 
                        key={data.id}
                        title={data.title}
                        services={data.service}
                    />
                ))}
        </div>
    )
}

export default MainAll;