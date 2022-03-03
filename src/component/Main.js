import React, {useState} from 'react';
import axios from 'axios'
import mainData from '../data/mainData';
import mainAllData from '../data/mainAllData.json'
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
    return (
        <div>
                {mainData.map(data=>(
                    <MainMenu data={data} />
                ))}
        </div>
    )
}
function MainAllData(){
    return (
        <div>
                {mainAllData.map(data=>(
                    <MainAllMenu data={data}/>
                ))}
        </div>
    )
}

function Main() {
    const [click, setClick]= useState(0);
    const onClick=()=>{
        click === 0 ? setClick(1) : setClick(0) ;

    }
    return (
        <div className='common-width'>
            <div>
                <h3>
                    고객센터를 통해 궁금증을 해결하세요
                    <button className='mainButton' onClick={onClick}>전체보기</button>
                </h3>
            </div>
            {click ? <MainAllData />:<MainData />}
        </div>
    );
}

export default Main;