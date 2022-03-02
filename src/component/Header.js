import React from 'react';
import linkData from "../data/headerData";

function Recommend( { data } ){
    return (
        <span>
            <a href={data.link}>{data.title}</a>
        </span>
    )
}

function Header(){
    return (
        <>
            <div>
                kakao 고객센터
            </div>
            <div>
                <input type="text" placeholder='궁금한 점이 있다면 도움말을 검색해보세요'/>
                <img src="" alt="" />
            </div>
            {linkData.map(data=>(
                <Recommend data={data} />
            ))}
        </>
    );
}

export default Header;