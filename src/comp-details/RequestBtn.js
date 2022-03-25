import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../scss/details/RequestBtn.scss';

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
                문의하기
            </Link>
        </div>
    );
};
RequestBtn.propTypes={
    onReqClick: PropTypes.func.isRequired,
}

export default RequestBtn;