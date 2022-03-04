import React, {useEffect, useState} from 'react';
import axios from 'axios'

function MainRecommendMenu({data}){
    return(
            <a href='/' className='inlineBlock MainMenu'>
                <img src={data.src} alt=''/>
                <div>{data.title}</div>
            </a>
    );
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
                    <MainRecommendMenu key={data.id} data={data} />
                ))}
        </div>
    )

}

export default MainRecommend;