import React,{useEffect, useState} from 'react';
import axios from 'axios';
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
    const [footerData,setFooterData]=useState([]);
    useEffect(()=>{
        axios.get('/data/footerData.json')
            .then(res=>setFooterData(res.data))
            .catch(err=>console.error(err));
    },[])
    return (
        <div className='Footer'>
            <div className='common-width'>
                <div>
                    {footerData.map((data,index)=>(
                        <Menu 
                            key={index} 
                            title={data.title} 
                            url={data.url} 
                        />
                    ))}
                </div>
                <div className='copyright'>
                    <span>Copyright © Kakao Corp. All right reserved.</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;