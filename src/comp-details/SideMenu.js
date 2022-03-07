import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideButton from './SideButton';
import '../scss/details/SideMenu.scss';

function SideMenu() {
    const [sideData, setSideData]=useState({});
    useEffect(()=>{
        axios.get('/data/sideMenuData.json')
            .then(res=>setSideData(res.data.filter(data=>data.name === '카카오톡')[0]))
    },[])
    const {name, menus} = sideData;

    return (
        <div className='inlineBlock sideMenu'>
            <h3>
                {name}
            </h3>
            {console.log(menus)}
            {/* {
                menus.map(data=>(
                    <SideButton title={data.title} url={data.url}/>
                ))
            } */}
        </div>
    );
}

export default SideMenu;