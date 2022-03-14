import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

// 국가 보여주는 코드
function Open({ onClickSelect, countries }){
    return(
        <div>
            {countries.map( data => (
                <label
                    type='button'
                    key={data.number+data.country}
                    className='countryNumbers'
                    onClick={onClickSelect}
                    onKeyDown={onClickSelect}
                    number={data.number}
                >
                    <span
                        number={data.number}
                    >
                        {data.number}
                    </span>
                    <span
                        number={data.number}
                    >
                        {data.country}
                    </span>
                </label>
            ))}
        </div>
    )
}
Open.propTypes={
    onClickSelect: PropTypes.func.isRequired,
    countries: PropTypes.arrayOf(PropTypes.shape({
        country: PropTypes.string,
        countryCode: PropTypes.string,
        number: PropTypes.string,
    })).isRequired,
}

function CountryNumber() {
    //data
    const [countries, setCountries]=useState([])
    useEffect(()=>{
        axios.get('/data/CountryNumber.json')
            .then(res => setCountries([
                ...countries,
                ...res.data,
            ]))
    },[])
    //clickEvent
    const [toggle, setToggle]=useState(false);
    const [selected, setSelected]=useState('');
    const onToggle=()=>setToggle(!toggle);
    const onClickSelect=(event)=>{
        setSelected(event.target.getAttribute('number'));
        setToggle(!toggle);
    }
    return (
        <div>
            <div onClick={onToggle}>
                {selected ? selected : '+82'}
            </div>
            {toggle &&
                <Open 
                    onClickSelect={onClickSelect}
                    countries={countries}    
                />
            }
        </div>
    );
}

export default CountryNumber;