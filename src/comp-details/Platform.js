import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery } from '../modules/query';
import '../scss/details/Platform.scss';

function Platform({ platform, onQueryPlatform, osType }){
    const { query }=useSelector(state=> state);
    const {service, category} = query;

    return (
        <div className='platformBox'>
            {platform.map((data,index,array)=>{
                return (
                    <div key={data}>
                        <div 
                            className={ +osType === +index ? 'active button':'button'  }
                            role='button'
                            tabIndex={index} 
                            onClick={onQueryPlatform}
                        >   
                            <Link
                                to={`?service=${service}&category=${category}&platform=${index}`}
                            >
                                {data}
                            </Link>
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