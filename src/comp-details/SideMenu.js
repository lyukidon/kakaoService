import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setService, setCategory } from '../modules/breadCrumb';

import '../scss/details/SideMenu.scss';

function SideButton({onQuery, service,name, title, category }) {
    const dispatch=useDispatch();
    const onService=(service, serviceName)=> dispatch(setService(service,serviceName));
    const onCategory=(category,categoryName)=> dispatch(setCategory(category,categoryName));
    const onClickBtn=()=>{
        onQuery();
        onService(service,name)
        onCategory(category, title);
    }
    // 이 부분 유용한 도움말 만든 후 삭제하기
    useEffect(()=>{
        onClickBtn();
    },[])
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
                        name={name}
                        title={data.title}
                        category={data.category}
                    />
            ))}
        </div>
    );
}

export default SideMenu;