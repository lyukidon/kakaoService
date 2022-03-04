import React, {useState} from 'react';
import MainRecommend from './MainRecommend';
import MainAll from './MainAll';
import '../scss/Main.scss'
import '../common.scss'

function Main() {
    const [showServicesCheck, setShowServicesCheck]= useState(true);
    const showServices=()=>{
        showServicesCheck ? setShowServicesCheck(false) : setShowServicesCheck(true);
    }
    return (
        <div className='common-width'>
            <div>
                <h3>
                    고객센터를 통해 궁금증을 해결하세요
                    <button className='mainButton' onClick={showServices}>{showServicesCheck?'전체보기':'주요서비스'}</button>
                </h3>
            </div>
            {showServicesCheck ? <MainRecommend />:<MainAll />}
        </div>
    );
}

export default Main;