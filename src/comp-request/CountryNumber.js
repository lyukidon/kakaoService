import React, { useState } from 'react';

function Open(){
    return(
        <div>

        </div>
    )
}

function Close(){
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
            {toggle?
                <Open onClickSelect={onClickSelect}/>
                :
                <Close onClickSelect={onClickSelect}/>
            }
        </div>
    );
}

export default CountryNumber;