import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery } from '../modules/query';
import '../scss/details/Platform.scss';

function Platform({ platform, onQueryPlatform, osType }){
    const { query }=useSelector(state=> state);
    const {service, category} = query;
    // const [toggles, setToggles]=useState({0:true})
    // const onClickToggle=(id)=>{
    //     const obj=new Object;
    //     obj[id] = true;
    //     onQueryPlatform();
    //     setToggles(obj);
    // }


    return (
        <div className='platformBox'>
            {platform.map((data,index,array)=>{
                return (
                    <div key={data}>
                        {console.log(osType)}
                        <div 
                            className='button'
                            className={ +osType === +index && 'active'  }
                            role='button'
                            tabIndex={index} 
                            onClick={onQueryPlatform}
                            // onClick={()=>onClickToggle(index)}
                            // onKeyDown={()=>onClickToggle()}
                        >   
                            <NavLink
                                to={`?service=${service}&category=${category}&platform=${index}`}
                            >
                                {data}
                            </NavLink>
                        </div>
                        {index !== array.length-1 && <div>&bull;</div>}
                    </div>
                )
            })}
        </div>
    );
}
Platform.propTypes={
    platform: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickPlatform: PropTypes.func.isRequired,
}
                                                                          
export default Platform;