import React from 'react';
import noticeData from '../data/noticeData'
import '../common.scss'
import '../scss/Notice.scss'

function Content({data}){
    return(
        <span>
            {data}
        </span>
    )
}

function Notice() {
    return (
        <div className='noticeBox'>
            <div  className='common-width'>
                <span><b>공지사항</b></span>
                <Content data={noticeData[0]}/>
            </div>
        </div>
    );
}

export default Notice;