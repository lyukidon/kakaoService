import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../scss/details/SideMenu.scss';

function SideButton({service, title, category }) {
    const menuurl=`/helps?service=${service}category=${category}`;

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

function SideMenu({service, name, menus}) {

    return (
        <div className='inlineBlock sideMenu'>
            <h3>
                {name}
            </h3>
            {menus.map(data=>(
                    <SideButton 
                        key={data.id} 
                        service={service} 
                        title={data.title} 
                        category={data.category}
                    />
            ))}
        </div>
    );
}

export default SideMenu;