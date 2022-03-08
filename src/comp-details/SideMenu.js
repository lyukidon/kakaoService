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
            .then(res=>setSideData(res.data.filter(data=>data.name === '카카오톡')[0]))
        
    },[])

    return (
        <div className='inlineBlock sideMenu'>
            <h3>
                {name}
            </h3>
            {console.log(menus)}
            {menus && menus.map(data=>(
                    <SideButton title={data.title} url={data.url}/>
            ))}
        </div>
    );
}

export default SideMenu;