import React from 'react';
import {footerData} from '../data/footerData';

function Menu({title,url}){
    return(
        <span>
            <a href={url}>{title}</a>
        </span>
    )
}

function Footer() {
    return (
        <div>
            {footerData.map(data=>(
                <Menu title={data.title} url={data.url} />
            ))}
        </div>
    );
}

export default Footer;