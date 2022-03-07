import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UsefulTips from './UsefulTips';
import '../common.scss';

function Detail() {
    const [tipsData, setTipsData]=useState({});
    useEffect(()=>{
        axios.get('/data/kakaotalkUsefulTips.json')
            .then(res=>setTipsData(res.data));
    },[])
    return (
        <div className='inlineBlock'>
            <UsefulTips
                key={tipsData.lang}
                classify={tipsData.classify}
                contents={tipsData.contents}
            />
        </div>
    );
}

export default Detail;