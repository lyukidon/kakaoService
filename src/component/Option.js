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
                    href="/">
                        로그인
                </a>
            </span>
        </div>
    );
}

export default Option;