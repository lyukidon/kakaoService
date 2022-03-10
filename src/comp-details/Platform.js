import React from 'react';
import '../scss/details/Platform.scss';

function Platform({ platform, onClickPlatform }){
    return (
        <div className='platformBox'>
            {platform.map((data,index,array)=>{
                return(
                    <>
                        <span className='button' name={index} onClick={onClickPlatform}>
                            {data}
                        </span>
                        {index !== array.length-1 && <span>&bull;</span>}
                    </>
                );
            })}
        </div>
    );
}

export default Platform