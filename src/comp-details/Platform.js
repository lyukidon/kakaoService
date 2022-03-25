import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery } from '../modules/query';
import '../scss/details/Platform.scss';

function Platform({ platform, onQueryPlatform }){
    const { query }=useSelector(state=> state);
    const {service, category} = query;

    return (
        <div className='platformBox'>
            {platform.map((data,index,array)=>(
                    <div className='inlineBlock' key={data}>
                        <span className='button'
                            role='button'
                            tabIndex={index} 
                            onClick={onQueryPlatform}
                            onKeyDown={onQueryPlatform}
                        >   
                            <NavLink 
                                to={`?service=${service}&category=${category}&platform=${index}`}
                            >
                                {data}
                            </NavLink>
                        </span>
                        {index !== array.length-1 && <span>&bull;</span>}
                    </div>
            ))}
        </div>
    );
}
Platform.propTypes={
    platform: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickPlatform: PropTypes.func.isRequired,
}
                                                                          
export default Platform;