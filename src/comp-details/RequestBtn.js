import React from 'react';
import PropTypes from 'prop-types';

function RequestBtn({ onReqClick }) {
    return (
        <div>
            <div className='inlineBlock'>
                원하시는 답변을 찾지 못하셨다면, 고객센터로 문의해 주세요
            </div>
            <button type='button' onClick={onReqClick} onKeyDown={onReqClick}>
                    문의하기
            </button>
        </div>
    );
};
RequestBtn.propTypes={
    onReqClick: PropTypes.func.isRequired,
}

export default RequestBtn;