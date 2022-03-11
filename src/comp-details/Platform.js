import React from 'react';
import PropTypes from 'prop-types';
import '../scss/details/Platform.scss';

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
                            {data}
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