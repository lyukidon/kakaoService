import React from 'react';
import mainData from '../data/mainData';

function MainMenu({data}){
    return(
            <div>
                <img src={data.src} alt=''/>
                <div>{data.title}</div>
            </div>
    );
}

function Main() {
    return (
        <div>
            <div>
                <span>고객센터를 통해 궁금증을 해결하세요</span>
                <button>전체보기</button>
            </div>
            <div>
                {mainData.map(data=>(
                    <MainMenu data={data} />
                ))}
            </div>
            
        </div>
    );
}

export default Main;