import React,{useEffect, useState} from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import '../common.scss'
import '../scss/root/Footer.scss'

function Menu({title,url}){
    return(
        <span className='footerMenu'>
            <a href={url}>{title}</a>
        </span>
    )
}
Menu.propTypes={
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}
function Footer() {
    const [footerData,setFooterData]=useState([]);
    useEffect(()=>{
        axios.get('/data/footer.json')
            .then(res=>setFooterData(res.data))
            .catch(err=>console.error(err));
    },[])
    return (
        <div className='Footer'>
            <div className='common-width'>
                <div>
                    {footerData.map((data)=>(
                        <Menu 
                            key={data.id} 
                            title={data.title} 
                            url='#' 
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