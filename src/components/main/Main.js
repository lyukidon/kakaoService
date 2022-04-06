import React, {useState} from 'react';
import MainRecommend from './MainRecommend';
import MainAll from './MainAll';
import '../scss/root/Main.scss'
import '../common.scss'

function Main() {
    const [serviceOn, setService]= useState(true);
    const onClickToggle=()=> setService(!serviceOn);
    return (
        <div className='common-width'>
            <div>
                <h3>
                    고객센터를 통해 궁금증을 해결하세요
                    <button 
                        type='button'
                        className='mainButton' 
                        onClick={onClickToggle}
                    >
                        {serviceOn?'전체보기':'주요서비스'}
                    </button>
                </h3>
            </div>
            {serviceOn ? <MainRecommend />:<MainAll />}
        </div>
    );
}

export default Main;