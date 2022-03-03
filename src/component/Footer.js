import React from 'react';
import {footerData} from '../data/footerData';
import '../common.scss'
import '../scss/Footer.scss'

function Menu({title,url}){
    return(
        <span className='footerMenu'>
            <a href={url}>{title}</a>
        </span>
    )
}

function Footer() {
    return (
        <div className='Footer common-width'>
            <div>
                {footerData.map(data=>(
                    <Menu title={data.title} url={data.url} />
                ))}
            </div>
            <div className='copyright'>
                <span>Copyright © Kakao Corp. All right reserved.</span>
            </div>
        </div>
    );
}

export default Footer;