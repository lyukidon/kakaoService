import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DetailTopTitle from './DetailTopTitle';
import Platform from './Platform';
import DetailContent from './DetailContent';

function DetailMain({ classify, content, platform }) {
    const [contentType, setContentType]=useState(0);
    const onClickPlatform=(event)=>{
        setContentType(event.target.getAttribute('tabindex'))
    }
    return (
        <div>
            <DetailTopTitle title={classify} />
            {platform.length !== 0 && <Platform 
                platform={platform} 
                onClickPlatform={onClickPlatform} 
            />}
            <DetailContent content={content[contentType]} />
        </div>
    );
}

DetailMain.defaultProps={
    classify: '',
    content:[],
    platform:[],
}
DetailMain.propTypes={
    classify: PropTypes.string,
    content: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        content:PropTypes.string,
        explain:PropTypes.string,
    }))),
    platform:PropTypes.arrayOf(PropTypes.string),
}

export default DetailMain;