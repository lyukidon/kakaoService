import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';

import Platform from './Platform';
import DetailContent from './DetailContent';

import { setOS } from '../modules/osType';

function DetailMain({ categoryName, content, platform, onQuery }) {
    // Redux Store 에서 데이터 받기
    const { osType } = useSelector(state=> state)
    // Redux store 에서 데이터 변경하기 (useState처럼);
    const dispatch = useDispatch();
    const onSetOS=(idx)=> dispatch(setOS(idx)); // 매개변수가 데이터로 들어감

    const onQueryPlatform=()=>{
        const query=qs.parse(window.location.search, {ignoreQueryPrefix:true});
        if (query.platform){
            onSetOS(query.platform);
        }
    };
    useEffect(()=>{
        onQueryPlatform();
    },[]);

    return (
        <div>
            <div className='classify'>{categoryName}</div>
            {platform.length !== 0 && 
                <Platform platform={platform} onQueryPlatform={onQueryPlatform} osType={osType}/>
            }
            <DetailContent
                onQuery={onQuery}
                content={content.length <= 1 ? content[0] : content[osType]}
            />
        </div>
    );
}

DetailMain.defaultProps={
    content:[],
    platform:[],
}
DetailMain.propTypes={
    content: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        content:PropTypes.string,
        explain:PropTypes.string,
    }))),
    platform:PropTypes.arrayOf(PropTypes.string),
    categoryName: PropTypes.string.isRequired,
    onQuery: PropTypes.func.isRequired,
}

export default DetailMain;