import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../scss/details/Platform.scss';

function Platform({ platform, onQueryPlatform, osType }){
    const { query }=useSelector(state=> state);
    const {service, category} = query;

    return (
        <div className='platformBox'>
            {platform.map((data,index,array)=>
                (
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
            )}
        </div>
    );
}
Platform.propTypes={
    platform: PropTypes.arrayOf(PropTypes.string).isRequired,
    onQueryPlatform: PropTypes.func.isRequired,
    osType:PropTypes.number.isRequired,
}
                                                                          
export default Platform;