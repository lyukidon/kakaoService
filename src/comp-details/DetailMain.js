import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';

import DetailTopTitle from './DetailTopTitle';
import Platform from './Platform';
import DetailContent from './DetailContent';

import { setOS } from '../modules/osType';

function DetailMain({ classify, content, platform }) {
    // Redux Store 에서 데이터 받기
    const { osType } = useSelector(state=> state)
    //Redux store 에서 데이터 변경하기 (useState처럼);
    const dispatch = useDispatch();
    const onSetOS=(idx)=> dispatch(setOS(idx)); // 매개변수가 데이터로 들어감

    const onQueryPlatform=()=>{
        const query=qs.parse(location.search, {ignoreQueryPrefix:true});
        query.platform && onSetOS(query.platform);
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
            <DetailContent content={content.length <= 1 ? content[0] : content[osType]} />

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