import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../scss/details/SideMenu.scss';

function SideButton({ title, url }) {
    const menuurl=`/kakaotalk${url}`;
    // const [toggle,setToggle]=useState(true);
    // const onToggle=()=>{
    //     setToggle(!toggle)
    //     console.log('test')
    // }
    return (
        <div className='sideButton'>
            <NavLink 
                to={menuurl} 
                className={({isActive}) => isActive ? 'active' : 'inactive'}
            >
                <b>
                    {title} 
                </b>
            </NavLink>
        </div>
        
    );
}
SideButton.propTypes={
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
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
                    <SideButton key={data.id} title={data.title} url={data.url}/>
            ))}
        </div>
    );
}

export default SideMenu;