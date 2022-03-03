import React,{useState, useEffect} from 'react';
import axios from 'axios';
import '../common.scss'
import '../scss/Header.scss'

function Recommend( { title } ){
    return (
        <span>
            <a className='recommend' href={'https://cs.kakao.com/search?query='+title}>{title}</a>
        </span>
    )
}

function Header(){
    const [headerData, setHeaderData]=useState([]);
    useEffect(()=>{
        axios.get('/data/headerData.json')
            .then(res=>setHeaderData(res.data))
            .catch(err=>console.error(err));
    },[])
    return (
        <header className='common-width'>
            <div className='title'>
                <h2>kakao 고객센터</h2>
            </div>
            <form className='searchBox'>
                <input type="text" placeholder='궁금한 점이 있다면 도움말을 검색해보세요' />
                <button>🔍</button>
                <div>
                    {
                        headerData.map((title,index)=>(
                            <Recommend key={index} title={title}/>
                        ))
                    }
                </div>
            </form>
        </header>
    );
}

export default Header;