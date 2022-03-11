import React,{ useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import DetailTopTitle from './DetailTopTitle';
import '../scss/details/Request.scss';

function Request({ onReqClick }) {
    const [info, setInfo]=useState({
        email:'',
        phone:'',
        category:'',
        title:'',
        content:'',
        file:'',
    })
    const onChangeEmail=()=>{
        
    }
    return (
        <form>
            <DetailTopTitle title="문의하기" />
            <div>*필수입력 사항</div>
            <div>
                <div>이메일 주소*</div>
                <input type="email" name="email" id="" />
            </div>
            <div>
                <div>휴대폰 번호*</div>
                <input type="text" name="phone" id="" />
            </div>
            <div>
                <div>문의 분류*</div>
                <input type="text" name="category" id="" />
            </div>
            <div>
                <div>문의 제목*</div>
                <input type="text" name="title" id="" />
            </div>
            <div>
                <div>문의 내용*</div>
                <input type="text" name="content" id="" />
            </div>
            <div></div>
            <div></div>
            <div></div>
            <button type='submit' onClick={onReqClick} onKeyDown={onReqClick}>문의접수</button>
        </form>
    );
}
Request.propTypes={
    onReqClick: PropTypes.func.isRequired,
}

export default Request;