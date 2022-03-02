import React from 'react';
import noticeData from '../data/noticeData'

let noticeChange='';
for (let i=0;i<noticeData.length;i++){
    setInterval(function(){
        if(i===noticeData.length-1){
            i=0;
        }
    },1000*i);
}

function Notice(props) {
    return (
        <div>
            <span><b>공지사항</b></span>
            
        </div>
    );
}

export default Notice;