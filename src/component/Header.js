import React from 'react';
import linkData from "../data/headerData";
import '../common.scss'
import '../scss/Header.scss'

function Recommend( { data } ){
    return (
        <span >
            <a className='recommend' href={data.link}>{data.title}</a>
        </span>
    )
}

function Header(){
    return (
        <header className='common-width'>
            <div className='title'>
                <h2>kakao 고객센터</h2>
            </div>
            <form className='searchBox'>
                <input type="text" placeholder='궁금한 점이 있다면 도움말을 검색해보세요'/>
                <button>🔍</button>
                <div>
                    {linkData.map(data=>(
                        <Recommend data={data} />
                    ))}
                </div>
            </form>
        </header>
    );
}

export default Header;