import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import DetailTopTitle from './DetailTopTitle';
import Platform from './Platform';
import DetailContent from './DetailContent';

function DetailMain({ classify, content, platform }) {
    const [contentType, setContentType]=useState(0);
    const onQueryPlatform=()=>{
        const query=qs.parse(location.search, {ignoreQueryPrefix:true});
        query.platform && setContentType(query.platform);
    };
    useEffect(()=>{
        onQueryPlatform();
    },[]);
    return (
        <div>
            <DetailTopTitle title={classify} />
            {platform.length !== 0 && 
                <Platform platform={platform} onQueryPlatform={onQueryPlatform} />
            }
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