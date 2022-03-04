import React from 'react';
import '../common.scss'
import '../scss/Option.scss'

function Option() {
    return (
        <div className='Option common-width'>
            <select name="lang">
                <option value="KOR">한국어</option>
                <option value="ENG">English</option>
            </select>
            <span>
                <a 
                    href="https://accounts.kakao.com/login?continue=https%3A%2F%2Fcs.kakao.com%2F">
                        로그인
                </a>
            </span>
        </div>
    );
}

export default Option;