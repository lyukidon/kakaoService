import React, {useState} from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import DetailTopTitle from '../comp-details/DetailTopTitle';
import CountryNumber from './CountryNumber';
import '../scss/details/Request.scss';

const reqData=yup.object({
    email: 
        yup.string()
            .email('이메일을 입력해주세요.')
            .required('이메일을 입력해주세요.'),
    phoneNumber: 
        yup.string()
            .min(9, "전화번호가 너무 짧습니다.")
            .max(12,'전화번호가 너무 깁니다.'),
    reqCategory1: 
        yup.string()
            .notOneOf(['선택해주세요'], '카테고리를 선택해주세요')
            .required('카테고리를 선택해주세요.'),
    reqCategory2:
        yup.string()
            .notOneOf(['선택해주세요'], '카테고리를 선택해주세요')
            .required('카테고리를 선택해주세요'),
    reqTitle: 
        yup.string()
            .required('제목을 입력해주세요.'),
    reqContent: 
        yup.string()
            .required('내용을 입력해주세요.'),
    reqAgree:
        yup.boolean(),
})

function Request({ onReqClick }) {
    const { register, handleSubmit, formState:{errors} }=useForm({
        resolver: yupResolver(reqData)
    });
    const onSubmit=(data)=> console.log(data);

    const [category, setCategory] = useState([
        {
            first: "선택해주세요",
            second: ["선택해주세요"],
        }, {
            first: '일반문의',
            second: [
                '선택해주세요','안드로이드', 'iOS', '안드로이드(원스토어)'
            ]
        }, {
            first: '인증번호',
            second: [
                '선택해주세요','안드로이드', 'iOS', 'Windows', '안드로이드(원스토어)'
            ]
        }
    ])
    const [select1, setSelect1] = useState('선택해주세요');
    const onSelect = (event) => {
        setSelect1(event.target.value);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Helmet>
                <title>카카오톡 문의하기 | kakao 고객센터</title>
            </Helmet>
            <DetailTopTitle title="문의하기" />
            <div className='essential'>*필수입력 사항</div>
            <div className='dataBox'>
                <div className='dataTitle'>이메일 주소*</div>
                <div>
                    <input 
                        {...register('email')} 
                        type="text" 
                        name="email" 
                        id="" 
                        placeholder='example@kakao.com' 
                    />
                    <span className='error'>
                        {errors.email?.message}
                    </span>
                </div>
            </div>
            <div className='dataBox'>
                <div className='dataTitle'>휴대폰 번호*</div>
                <div>
                    <CountryNumber />
                    <input 
                        {...register('phoneNumber')}
                        type="string" 
                        name="phoneNumber" 
                        id="" 
                        placeholder='01012345678'
                    />
                    <span className='error'>
                        {errors.phoneNumber?.message}
                    </span>
                </div>
            </div>
            <div className='dataBox'>
                <div className='dataTitle'>문의 분류*</div>
                <div>
                        <select
                            {...register('reqCategory1')} 
                            onChange={onSelect}
                            name="reqCategory1"
                        >
                            {category.map(data => (
                                <option key={data.first} value={data.first}>
                                    {data.first}
                                </option>
                            ))}
                        </select>
                        <select 
                            {...register('reqCategory2')} 
                            name="reqCategory2"
                        >
                            {select1 &&
                                category
                                    .filter(data => data.first === select1)[0].second
                                    .map((data,index) => (
                                        <option 
                                            key={data} 
                                            value={data}
                                            // { index === 0 && selected } 
                                        >
                                            {data}
                                        </option>
                                    ))}
                        </select>

                    <div className='error'>
                        {errors.reqCategory1?.message}
                        {errors.reqCategory2?.message}
                    </div>
                </div>
            </div>
            <div className='dataBox'>
                <div className='dataTitle'>문의 제목*</div>
                <input 
                    {...register('reqTitle')}
                    type="text" 
                    name="reqTitle" 
                    id="" 
                    placeholder='제목을 입력해 주세요(20자 이내)'
                />
                <span className='error'>
                    {errors.reqTitle?.message}
                </span>
            </div>
            <div className='dataBox'>
                <div className='dataTitle'>문의 내용*</div>
                <input 
                    {...register(
                        'reqContent',
                        {required:true},
                    )}
                    type="text" 
                    name="reqContent" 
                    id="" 
                />
                <span className='error'>
                    {errors.reqContent?.message}
                </span>

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
                    주)카카오는 이용자 문의를 처리하기 위해 다음과 같이 개인정보를 수집 및 이용하며,
                    이용자의 개인정보를 안전하게 취급하는데 최선을 다하고 있습니다.
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
                    <input 
                        {...register('reqAgree')}
                        type="checkbox" 
                        name="check"
                        id="" 
                    />
                    <span>
                        위 내용에 동의합니다.
                    </span>
                    <span>
                        개인정보수집·이용에 동의해 주세요
                    </span>
                    <div className='error'>
                        {errors.reqAgree?.message}
                        {console.log(errors)}
                    </div>
                </div>
            </div>
                <button 
                    type='submit'
                    className='reqButton'
                    // onClick={onReqClick}
                >문의접수</button>
        </form>
    );
}
Request.propTypes={
    classify: PropTypes.string.isRequired,
    onReqClick: PropTypes.func.isRequired,
}

export default Request;