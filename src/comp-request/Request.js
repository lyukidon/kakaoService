import React,{ useState } from 'react';
import * as yup from 'yup';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import DetailTopTitle from '../comp-details/DetailTopTitle';
import CountryNumber from './CountryNumber';
import '../scss/details/Request.scss';

function Request({ onReqClick }) {
    const [info, setInfo]=useState({
        email:'',
        phone:'',
        category:'',
        title:'',
        content:'',
        file:'',
        check:false,
    })
    const onChangeEmail=()=>{
        
    }
    return (
        <form>
            <Helmet>
                <title>카카오톡 문의하기 | kakao 고객센터</title>
            </Helmet>
            <DetailTopTitle title="문의하기" />
            <div className='essential'>*필수입력 사항</div>
            <div className='dataBox'>
                <div className='dataTitle'>이메일 주소*</div>
                <div>
                    <input type="email" name="email" id="" placeholder='example@kakao.com' />
                </div>
            </div>
            <div className='dataBox'>
                <div className='dataTitle'>휴대폰 번호*</div>
                <div>
                    <CountryNumber />
                    <input type="text" name="phone" id="" placeholder='01012345678'/>
                </div>
            </div>
            <div className='dataBox'>
                <div className='dataTitle'>문의 분류*</div>
                <div>
                    <input type="text" name="category" id="" placeholder='카테고리 선택'/>
                </div>
            </div>
            <div className='dataBox'>
                <div className='dataTitle'>문의 제목*</div>
                <input type="text" name="title" id="" placeholder='제목을 입력해 주세요(20자 이내)'/>
            </div>
            <div className='dataBox'>
                <div className='dataTitle'>문의 내용*</div>
                <input type="text" name="content" id="" />
            </div>
            <div className='dataBox'>
                <div className='dataTitle'>파일 첨부</div>
                <div>
                    <input type="file" name="file" id="" />
                    <div className='block'>첨부파일은 최대 5개, 30MB까지 등록 가능합니다.</div>
                </div>
            </div>
            <div className='dataPolicy'>
                <div>개인정보 수집·이용에 대한 안내</div>
                <div><strong>(필수) 개인정보 수집·이용에 대한 안내</strong></div>
                <div>
                    주)카카오는 이용자 문의를 처리하기 위해 다음과 같이 개인정보를 수집 및 이용하며, 이용자의 개인정보를 안전하게 취급하는데 최선을 다하고 있습니다.
                </div>
                <table>
                    <thead>
                        <tr>
                            <td>수집항목</td>
                            <td>수집목적</td>
                            <td>보유기간</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>이메일 주소, 휴대폰 번호</td>
                            <td>문의・요청・불편사항 확인 및 처리결과 회신</td>
                            <td>3년간 보관 후 지체없이 파기</td>
                        </tr>
                    </tbody>
                </table>
                <div>위 동의를 거부할 권리가 있으며, 동의를 거부하실 경우 문의 처리 및 결과 회신이 제한됩니다.</div>
                <div>더 자세한 내용에 대해서는 카카오 개인정보처리방침을 참고하시기 바랍니다.</div>
                <div>
                    <input type="checkbox" name="check" id="" />
                    <span>
                        위 내용에 동의합니다.
                    </span>
                    <span>
                        개인정보수집·이용에 동의해 주세요
                    </span>
                </div>
            </div>
            <button type='submit' onClick={onReqClick} onKeyDown={onReqClick}>문의접수</button>
        </form>
    );
}
Request.propTypes={
    classify: PropTypes.string.isRequired,
    onReqClick: PropTypes.func.isRequired,
}

export default Request;