import React, {useState} from 'react';
import PropTypes from 'prop-types';

import UsefulTips from './UsefulTips';
import DetailMain from './DetailMain';
import Request from '../comp-request/Request';
import RequestBtn from './RequestBtn';

import '../scss/details/Detail.scss';

function Detail({ tipsData, content, platform }) {
    const [useful,setUseful]=useState(true);
    const [reqClick, setReqClick]=useState(false);
    const onReqClick=()=>{
        setReqClick(!reqClick);
        setUseful(false);
        console.log(useful)
    }
    return (
        <div className='inlineBlock Detail'>
            {
                !reqClick ?
                <>
                    <DetailMain
                        key={tipsData.lang}
                        classify={tipsData.classify}
                        content={content}
                        platform={platform}
                    />
                    <RequestBtn onReqClick={onReqClick}/>
                </>
                :
                    <Request classify={tipsData.classify} onReqClick={onReqClick} />
            }
        </div>
    );
}

Detail.defaultProps={
    content:[],
    platform:[]
}
Detail.propTypes={
    tipsData:PropTypes.shape({
        lang: PropTypes.string,
        classify: PropTypes.string,
    }).isRequired,
    content: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        content:PropTypes.string,
        explain:PropTypes.string,
    }))),
    platform:PropTypes.arrayOf(PropTypes.string),
}

export default Detail;