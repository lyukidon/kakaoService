import React, {useEffect, useState} from 'react';
import axios from 'axios'
import '../scss/Main.scss'
import '../common.scss'

function MainMenu({data}){
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
            {data.service.map(function(c){
                const {serviceUrl,serviceName} = c
                return(
                    <div className='AllMenus'><a href={serviceUrl}>{serviceName}</a></div>
                )
            })}
        </div>
    );
}
function MainData(){
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
                {mainRecommendData.map((data,index)=>(
                    <MainMenu key={index} data={data} />
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
    const [click, setClick]= useState(true);
    const onClick=()=>{
        click ? setClick(false) : setClick(true);
    }
    return (
        <div className='common-width'>
            <div>
                <h3>
                    고객센터를 통해 궁금증을 해결하세요
                    <button className='mainButton' onClick={onClick}>전체보기</button>
                </h3>
            </div>
            {click ? <MainData />:<MainAllData />}
        </div>
    );
}

export default Main;