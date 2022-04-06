import React from 'react';
import { Link } from 'react-router-dom';

import '../../scss/main/Option.scss'

function Option() {
    return (
        <div className='Option common-width'>
            <select name="lang">
                <option value="KOR">한국어</option>
                <option value="ENG">English</option>
            </select>
            <span>
                <Link to='/login'>
                    로그인
                </Link>
            </span>
        </div>
    );
}

export default Option;