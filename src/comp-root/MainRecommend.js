import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import axios from 'axios';

function MainRecommendMenu({title, src, url}){
    return(
            <div className='inlineBlock MainMenu'>
                <Link to={url}>
                    <img src={src} alt=''/>
                    <div>{title}</div>
                </Link>
            </div>
    );
}
MainRecommendMenu.propTypes={
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}


function MainRecommend() {
    const [mainRecommendData,setMainRecommendData]=useState([])
    useEffect(()=>{
        async function getData(){
            const res=await axios.get('/data/mainRecommendData.json');
            setMainRecommendData(res.data);
        }
        getData()
    },[])
    return (
        <div>
                {mainRecommendData.map((data)=>(
                    <MainRecommendMenu 
                        key={data.id} 
                        title={data.title} 
                        src={data.src}
                        url={data.url}
                    />
                ))}
        </div>
    )

}

export default MainRecommend;