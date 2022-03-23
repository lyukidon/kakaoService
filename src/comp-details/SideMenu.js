import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setService, setCategory } from '../modules/breadCrumb';

import '../scss/details/SideMenu.scss';

function SideButton({onQuery, onClickCategory, service, title, category }) {
    const onClickBtn=()=>{
        onQuery();
        onClickCategory(category, title);
    }
    const menuurl=`/helps?service=${service}&category=${category}`;
    return (
        <div 
            className='sideButton'
            onClick={
                ()=>onClickBtn(category,title)
            }
        >
            <NavLink
                to={menuurl}
                className={
                    ({isActive}) => // (data) => data.isActive ? 이런식으로 변경가능
                    !isActive ? 'active' : 'inactive'
                }
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

function SideMenu({onQuery, service, name, menus, onResetUseful}) {
    const dispatch=useDispatch();
    const onService=(service, serviceName)=> dispatch(setService(service,serviceName));
    const onCategory=(category,categoryName)=> dispatch(setCategory(category,categoryName));

    useEffect(()=>{
        onService(service, name)
    },[name])
    const [categoryData,setCategoryData]=useState({
        category: undefined,
        category_name:''
    })
    const onClickCategory=(category,categoryName)=>{
        setCategoryData({
            ...categoryData,
            category: category,
            category_name:categoryName,
        })
        onCategory(categoryData.category, categoryData.category_name);
    }
    return (
        <div className='inlineBlock sideMenu'>
            <h3>
                {name}
            </h3>
            {menus.map(data=>(
                    <SideButton
                        key={data.id}
                        onQuery={onQuery}
                        onClickCategory={onClickCategory}
                        name={name}
                        title={data.title}
                        category={data.category}
                        onResetUseful={onResetUseful}
                    />
            ))}
        </div>
    );
}

export default SideMenu;