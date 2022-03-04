import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function MainRecommendMenu({title, src}){
    return(
            <a href='/' className='inlineBlock MainMenu'>
                <img src={src} alt=''/>
                <div>{title}</div>
            </a>
    );
}
MainRecommendMenu.propTypes={
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
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
                    />
                ))}
        </div>
    )

}

export default MainRecommend;