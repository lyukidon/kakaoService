import React from 'react';
import {adminData, reportData} from '../data/subData'
import '../scss/Sub.scss'
import '../common.scss'

function Menu({ data }){
    return(
        <div className='Menu inlineBlock'>
            <a href={data.url}>{data.title} ></a>
        </div>
    )
}

function Sub() {
    return (
        <div className='Sub common-width'>
            <div className='SubMenu inlineBlock'>
                <h3>카카오 계정관리</h3>
                <div>
                    {adminData.map(data=>(
                        <Menu data={data} />
                    ))}
                </div>
            </div>
            <div className='SubMenu inlineBlock'>
                <h3>카카오 신고센터</h3>
                <div>
                    {reportData.map(data=>(
                        <Menu data={data} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sub;