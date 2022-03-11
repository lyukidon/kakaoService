import React, { useState } from 'react';

// 국가 보여주는 코드
function Open(){
    return(
        <div>

        </div>
    )
}

function CountryNumber() {
    const [toggle, setToggle]=useState(false);
    const [selected, setSelected]=useState('');
    const onClickSelect=(event)=>{
        setSelected(event.target.value);
    }
    return (
        <div>
            <div>{selected}</div>
            {toggle &&
                <Open onClickSelect={onClickSelect}/>
            }
        </div>
    );
}

export default CountryNumber;