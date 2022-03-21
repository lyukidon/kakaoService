import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../scss/details/RequestBtn.scss';

function RequestBtn() {
    return (
        <div className='RequestBox'>
            <div className='inlineBlock'>
                원하시는 답변을 찾지 못하셨다면, 고객센터로 문의해 주세요
            </div>
            <Link className='inlineBlock reqButton' >
                    문의하기
            </Link>
        </div>
    );
};
RequestBtn.propTypes={
    onReqClick: PropTypes.func.isRequired,
}

export default RequestBtn;