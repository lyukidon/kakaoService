import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../scss/details/SideMenu.scss';
import '../scss/details/SideButton.scss'

function SideButton({ title, url }) {
    const menuurl=`/kakaotalk/${url}`;
    return (
        <div>
            <Link to={menuurl} className='SideButton'>
                <b>
                    {title} 
                </b>
            </Link>
        </div>
        
    );
}
SideButton.defaultProps={
    name:'',
}
SideButton.propTypes={
    name: PropTypes.string,
}

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