import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setService, setCategory } from '../modules/breadCrumb';

import '../scss/details/SideMenu.scss';

function SideButton({onQuery, service, title, category }) {
    const dispatch=useDispatch();
    const onService=(data)=> dispatch(setService(data));
    const onCategory=(data)=> dispatch(setCategory(data));
    const onClickBtn=(service, category)=>{
        onQuery();
        onService(service);
        onCategory(category);
    }
    useEffect(()=>{
        onClickBtn();
    },[])
    const menuurl=`/helps?service=${service}&category=${category}`;
    return (
        <div className='sideButton' onClick={()=>onClickBtn(service,category)}>
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

function SideMenu({onQuery, service, name, menus}) {

    return (
        <div className='inlineBlock sideMenu'>
            <h3>
                {name}
            </h3>
            {menus.map(data=>(
                    <SideButton 
                        key={data.id} 
                        onQuery={onQuery}
                        service={service} 
                        title={data.title} 
                        category={data.category}
                    />
            ))}
        </div>
    );
}

export default SideMenu;