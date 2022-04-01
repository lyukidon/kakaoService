import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../scss/details/RequestBtn.scss';

const Write=styled.div`
    display: inline-block;
    background-color: #e8e8e8;
    background: url('/ico.png') no-repeat -80px -60px;
	width: 17px;
	height: 17px;
`

function RequestBtn({ query }) {
    return (
        <div className='RequestBox'>
            <div className='inlineBlock'>
                원하시는 답변을 찾지 못하셨다면, 고객센터로 문의해 주세요
            </div>
            <Link 
                to={`/req?service=${query.service}&category=${query.category}`} 
                className='inlineBlock reqButton' 
            >
                <Write />
                문의하기
            </Link>
        </div>
    );
};
RequestBtn.defaultProps={
    query:[]
}
RequestBtn.propTypes={
    query: PropTypes.shape({
        service:PropTypes.string,
        category:PropTypes.string,
        platform:PropTypes.string,
        articleId:PropTypes.string,
    })
}

export default RequestBtn;