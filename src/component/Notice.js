import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../common.scss';
import '../scss/Notice.scss';

function Content({data}){
    return(
        <span>
            {data}
        </span>
    )
}
Content.defaultProps={
    data:'',
}
Content.propTypes={
    data:PropTypes.string
}

function Notice() {
    const [notices,setNotices]=useState([])
    useEffect(()=>{
        axios.get('/data/noticeData.json')
            .then(res=>setNotices(res.data));
    },[])
    return (
        <div className='noticeBox'>
            <div  className='common-width'>
                <span><b>공지사항</b></span>
                <Content data={notices[0]}/>
            </div>
        </div>
    );
}

export default Notice;