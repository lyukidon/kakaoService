import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery } from '../modules/query';
import '../scss/details/Platform.scss';

const styled={
    color: 'red',
    backgroundColor: 'black',
}

function Platform({ platform, onQueryPlatform }){
    const { query }=useSelector(state=> state);
    const {service, category} = query;
    const [toggles, setToggles]=useState({0:true})
    const onClickToggle=(id)=>{
        const obj=new Object;
        obj[id] = true;
        onQueryPlatform();
        setToggles(obj);
    }

    return (
        <div className='platformBox'>
            {platform.map((data,index,array)=>{
                return (
                    <div key={data}>
                        {console.log()}
                        <div 
                            className='button'
                            className={ toggles[index] && 'active'  }
                            role='button'
                            tabIndex={index} 
                            onClick={()=>onClickToggle(index)}
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