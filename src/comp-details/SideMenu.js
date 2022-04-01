import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setService, setCategory } from '../modules/breadCrumb';
import { setOS } from '../modules/osType';

import '../scss/details/SideMenu.scss';

function SideButton({ style, onQuery, onClickCategory, service, categoryName, categoryNumber }) {
    const dispatch=useDispatch()
    const onSetOS= num => dispatch(setOS(num));
    const onClickBtn=()=>{
        onQuery();
        onSetOS(0);
        onClickCategory(categoryNumber,categoryName);
    }
    const menuurl=`/helps?service=${service}&category=${categoryNumber}&platform=0`;
    return (
        <div 
            role='button'
            tabIndex={0}
            className='sideButton'
            onClick={onClickBtn}
            onKeyDown={onClickBtn}
        >
                <Link
                    to={menuurl}
                    id = 'sideNav'
                    className={style}
                        // ({isActive}) => // (data) => data.isActive ? 이런식으로 변경가능
                        // !isActive ? 'active' : 'inactive'
                >
                    <b>
                        {categoryName} 
                    </b>
                </Link>
        </div>
        
    );
}
SideButton.propTypes={
    style: PropTypes.string.isRequired,
    onQuery: PropTypes.func.isRequired,
    onClickCategory: PropTypes.func.isRequired,
    service: PropTypes.number.isRequired,
    categoryName:PropTypes.string.isRequired,
    categoryNumber:PropTypes.number.isRequired,
}

function SideMenu({ onQuery, side }) {
    const { service, name, category }=side;
    
    const { query } = useSelector(state=>state);
    const dispatch=useDispatch();
    const onService=(serv, serviceName)=> dispatch(setService(serv,serviceName));
    const onCategory=(cat,categoryName)=> dispatch(setCategory(cat,categoryName));
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
    const onClickCategory=(cat,categoryName)=>{
        setCategoryData({
            ...categoryData,
            category,
            category_name:categoryName,
        })
    }
    return (
        <div className='inlineBlock sideMenu'>
            <h3>
                {name}
            </h3>
            {category.map((data, index)=>(
                    <SideButton
                        key={data}
                        onQuery={onQuery}
                        service={service}
                        style={+index === +query.category ? 'active': "inactive"}
                        onClickCategory={onClickCategory}
                        name={name}
                        categoryName={data}
                        categoryNumber={index}
                    />
            ))}
        </div>
    );
}
SideMenu.propTypes={
    onQuery:PropTypes.func.isRequired,
    side: PropTypes.shape({
        service: PropTypes.number,
        name: PropTypes.string,
        category:PropTypes.number,
    }).isRequired,
}

export default SideMenu;