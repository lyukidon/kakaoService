import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import axios from 'axios';
import '../common.scss';
import '../scss/root/Header.scss';

function Recommend( { title } ){
    return (
        <span>
            <a className='recommend' href='#;'>{title}</a>
        </span>
    )
}
Recommend.propTypes={
    title: PropTypes.string.isRequired,
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
                <Link to='/'>
                    <h2>kakao 고객센터</h2>
                </Link>
            </div>
            <form className='searchBox'>
                <input type="text" placeholder='궁금한 점이 있다면 도움말을 검색해보세요' />
                <button type='button' className='searchIcon'></button>
                <div>
                    {
                        headerData.map((headerdata)=>(
                            <Recommend
                                key={headerdata.id} 
                                title={headerdata.title}
                            />
                        ))
                    }
                </div>
            </form>
        </header>
    );
}

export default Header;