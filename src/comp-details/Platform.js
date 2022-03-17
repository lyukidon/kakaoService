import React from 'react';
import PropTypes from 'prop-types';
import '../scss/details/Platform.scss';
import { NavLink } from 'react-router-dom';

function Platform({ platform, onClickPlatform }){
    return (
        <div className='platformBox'>
            {platform.map((data,index,array)=>(
                    <div className='inlineBlock' key={data}>
                        <span className='button'
                            role='button'
                            tabIndex={index} 
                            onClick={onClickPlatform}
                            onKeyDown={onClickPlatform}
                        >   
                            <NavLink to={`${location.search}&platform=${index}`}>
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
                                                                          
export default Platform