import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setService, setCategory } from '../modules/breadCrumb';

import '../scss/details/SideMenu.scss';

function SideButton({ style, onQuery, onClickCategory, service, title, category }) {
    const onClickBtn=()=>{
        onQuery();
        onClickCategory(category, title);
    }
    const menuurl=`/helps?service=${service}&category=${category}&platform=0`;
    return (
        <div className='sideButton'>
            <label
                onClick={
                    ()=>onClickBtn(category,title)
                }
                for='sideNav'
            >
                <Link
                    to={menuurl}
                    id = 'sideNav'
                    className={style}
                        // ({isActive}) => // (data) => data.isActive ? 이런식으로 변경가능
                        // !isActive ? 'active' : 'inactive'
                >
                    <b>
                        {title} 
                    </b>
                </Link>
            </label>
        </div>
        
    );
}
SideButton.propTypes={
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
}

function SideMenu({onQuery, service, name, menus, onResetUseful}) {
    const { query } = useSelector(state=>state);
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
    useEffect(()=>{
        onCategory(categoryData.category, categoryData.category_name);
    },[categoryData]);
    const onClickCategory=(category,categoryName)=>{
        setCategoryData({
            ...categoryData,
            category: category,
            category_name:categoryName,
        })
    }
    return (
        <div className='inlineBlock sideMenu'>
            <h3>
                {name}
            </h3>
            {menus.map((data, index)=>(
                    <SideButton
                        key={data.id}
                        onQuery={onQuery}
                        service={service}
                        style={+index === +query.category ? 'active': "inactive"}
                        onClickCategory={onClickCategory}
                        name={name}
                        title={data.title}
                        category={data.category}
                    />
            ))}
        </div>
    );
}

export default SideMenu;