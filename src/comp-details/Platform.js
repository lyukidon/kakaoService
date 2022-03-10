import React from 'react';

export default ({ platform })=>{
    return (
        <div className='platformBox'>
            {platform.map(data=>{
                return(
                    <span>{data}</span>
                )
            })}
        </div>
    );
}