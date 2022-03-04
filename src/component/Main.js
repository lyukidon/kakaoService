import React, {useEffect, useState} from 'react';
import axios from 'axios'
import '../scss/Main.scss'
import '../common.scss'

function MainRecommendMenu({data}){
    return(
            <a href='' className='inlineBlock MainMenu'>
                <img src={data.src} alt=''/>
                <div>{data.title}</div>
            </a>
    );
}
function MainAllMenu({ data }){
    return (
        <div className='MainAllMenu inlineBlock'>
            <div className='title'><b>{data.title}</b></div>
            {data.service.map((c,index)=>{
                const {serviceUrl,serviceName} = c
                return(
                    <div key={index} className='AllMenus'><a href={serviceUrl}>{serviceName}</a></div>
                )
            })}
        </div>
    );
}
function MainRecommnedData(){
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
function MainAllData(){
    const [mainAllData,setMainAllData]=useState([])
    useEffect(()=>{
        axios.get('/data/mainAllData.json')
            .then((res)=> setMainAllData(res.data))
            .catch((err)=>console.log(err))
    },[])
    return (
        <div>
                {mainAllData.map((data,index)=>(
                    <MainAllMenu key={index} data={data}/>
                ))}
        </div>
    )
}

function Main() {
    const [showServicesCheck, setShowServicesCheck]= useState(true);
    const showServices=()=>{
        showServicesCheck ? setShowServicesCheck(false) : setShowServicesCheck(true);
    }
    return (
        <div className='common-width'>
            <div>
                <h3>
                    고객센터를 통해 궁금증을 해결하세요
                    <button className='mainButton' onClick={showServices}>{showServicesCheck?'전체보기':'주요서비스'}</button>
                </h3>
            </div>
            {showServicesCheck ? <MainRecommnedData />:<MainAllData />}
        </div>
    );
}

export default Main;