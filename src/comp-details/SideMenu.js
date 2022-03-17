import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../scss/details/SideMenu.scss';

function SideButton({ title, category }) {
    const menuurl=`/kakaotalk/?category=${category}`;

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
    category: PropTypes.string.isRequired,
}

function SideMenu({name, menus}) {

    return (
        <div className='inlineBlock sideMenu'>
            <h3>
                {name}
            </h3>
            {menus.map(data=>(
                    <SideButton key={data.id} title={data.title} category={data.category}/>
            ))}
        </div>
    );
}

export default SideMenu;