import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import axios from 'axios';
import styled from 'styled-components';
import '../common.scss';
import '../scss/root/Header.scss';

const Title=styled(Link)`
    margin-top: 30px;
    display:inline-block;
    margin:25px 30px 30px 0px;
    &:hover{
        text-decoration-line:none;
    }
    font-size: 30px;
    font-weight: bold;
`

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
            <Title to='/'>kakao 고객센터</Title>
            <form className='searchBox'>
                <input type="text" placeholder='궁금한 점이 있다면 도움말을 검색해보세요' />
                <input type='submit' className='searchIcon' />
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