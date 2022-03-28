import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../scss/details/RequestBtn.scss';

const Write=styled.div`
    display: inline-block;
    background-color: #e8e8e8;
    background: url('/ico.png') no-repeat -80px -60px;
	width: 17px;
	height: 17px;
`

function RequestBtn() {
    const { breadCrumb }=useSelector(state => state);
    return (
        <div 
            className='RequestBox'
        >
            <div className='inlineBlock'>
                원하시는 답변을 찾지 못하셨다면, 고객센터로 문의해 주세요
            </div>
            <Link 
                to={`/requests?service=${breadCrumb.service}`} 
                className='inlineBlock reqButton' 
            >
                <Write />
                문의하기
            </Link>
        </div>
    );
};
RequestBtn.propTypes={
    onReqClick: PropTypes.func.isRequired,
}

export default RequestBtn;