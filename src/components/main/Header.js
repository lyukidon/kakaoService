import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import axios from 'axios';
import styled from 'styled-components';
import '../../scss/main/Header.scss';

const Title=styled(Link)`
    margin-top: 30px;
    display:inline-block;
    margin:25px 30px 30px 0px;
    &:hover{
        text-decoration-line:none;
    }
    font-size: 30px;
    font-weight: bold;
`;

function Header(){
    const [headerData, setHeaderData]=useState([]);
    useEffect(()=>{
        axios.get('/data/header.json')
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
                            <span key={headerdata.id} >
                                <a className='recommend' href='#;'>{headerdata.title}</a>
                            </span>
                        ))
                    }
                </div>
            </form>
        </header>
    );
}

export default Header;