import React from 'react';
import {adminData, reportData} from '../data/subData'
import '../scss/Sub.scss'

function Menu({ data }){
    return(
        <div>
            <a href={data.url}>{data.title} ></a>
        </div>
    )
}

function Sub() {
    return (
        <div>
            <div>
                <div><b>카카오 계정관리</b></div>
                <div>
                    {adminData.map(data=>(
                        <Menu data={data} />
                    ))}
                </div>
            </div>
            <div>
                <div><b>카카오 신고센터</b></div>
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