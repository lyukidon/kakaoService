import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Platform from './Platform';
import DetailContent from './DetailContent';

function DetailMain({ classify, content, platform }) {
    const [contentType, setContentType]=useState(0);
    const onClickPlatform=(event)=>{
        setContentType(event.target.getAttribute('name'))
    }
    return (
        <div>
            <div className='classify'>{classify}</div>
            {platform.length !== 0 && <Platform 
                platform={platform} 
                onClickPlatform={onClickPlatform} 
            />}
            <DetailContent content={content[contentType]} />
        </div>
    );
}
DetailContent.defaultProps={
    content:[],
}
DetailContent.propTypes={
    classify: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        content: PropTypes.string,
    }))
}

export default DetailMain;