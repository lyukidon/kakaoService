import React from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import '../scss/details/Platform.scss';
import { NavLink } from 'react-router-dom';

function Platform({ platform, onQueryPlatform }){
    const query=qs.parse(location.search, {ignoreQueryPrefix:true});
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
                            <NavLink to={`?service=${service}&category=${category}&platform=${index}`}>
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