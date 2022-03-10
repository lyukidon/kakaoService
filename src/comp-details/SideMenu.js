import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideButton from './SideButton';
import '../scss/details/SideMenu.scss';

function SideMenu() {
    const [sideData, setSideData]=useState({
        name:'',
        menus:[]
    });
    const {name, menus} = sideData;
    useEffect(()=>{
        axios.get('/data/sideMenuData.json')
            .then(res=>{
                const sidedata= res.data.filter(data=>data.name === '카카오톡')[0];
                setSideData({
                    ...sideData,
                    name: sidedata.name,
                    menus: sidedata.menus,
                })
            })
    },[])

    return (
        <div className='inlineBlock sideMenu'>
            <h3>
                {name}
            </h3>
            {menus.map(data=>(
                    <SideButton title={data.title} url={data.url}/>
            ))}
        </div>
    );
}

export default SideMenu;