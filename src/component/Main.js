import React, {useState} from 'react';
import axios from 'axios'
import mainData from '../data/mainData';
import mainAllData from '../data/mainAllData.json'
import '../scss/Main.scss'
import '../common.scss'

function MainMenu({data}){
    return(
            <div>
                <img src={data.src} alt=''/>
                <div>{data.title}</div>
            </div>
    );
}

function MainAllMenu({ data }){
    return (
        <div className='MainAllMenu inlineBlock'>
            <h4>{data.title}</h4>
            {data.service.map(function(c){
                const {serviceUrl,serviceName} = c
                return(
                    <div><a href={serviceUrl}>{serviceName}</a></div>
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
        <div>
            <div>
                <span>고객센터를 통해 궁금증을 해결하세요</span>
                <button onClick={onClick}>전체보기</button>
            </div>
            {
                click ? <MainData />:<MainAllData />
            }
            
            
            
        </div>
    );
}

export default Main;