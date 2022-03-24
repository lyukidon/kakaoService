import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import '../scss/request/CountryNumber.scss'

const SearchImg=styled.div`
    display: inline-block;
    background: url('/ico.png') no-repeat 0 -64px;
	width: 19px;
	height: 20px;
    margin: 10px;
`
// 국가 보여주는 코드
function Open({ onClickSelect, onChngSearch, countries }){
    return(
        <div>
            <div>
                
                <SearchImg></SearchImg>
                <input type="text" onChange={onChngSearch} />
            </div>
            {countries.map( (data,index) => (
                <div
                    role="button"
                    key={data.number+data.country}
                    className='countryNumbers'
                    onClick={onClickSelect}
                    onKeyDown={onClickSelect}
                    number={data.number}
                    tabIndex={index}
                >
                    <div
                        className='number inlineBlock'
                        number={data.number}
                    >
                        {data.number}
                    </div>
                    <div
                        className='countryName inlineBlock'
                        number={data.number}
                    >
                        {data.country}
                    </div>
                </div>
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
    // data
    const [countries, setCountries]=useState([])
    const [nation,setNation]=useState([])
    useEffect(()=>{
        axios.get('/data/CountryNumber.json')
        .then(res => {
            setCountries([
                ...countries,
                ...res.data,
            ])
            setNation([...nation,...res.data])
            console.log(countries)
        })
    },[])
    // search
    const [search,setSearch]=useState('');
    const onChngSearch=(event)=>{
        setSearch(event.target.value)
    }
    useEffect(()=>{
        if (search === ''){
            setNation([...countries])
        }else{
            setNation([...countries.filter(data => data.country.indexOf(search) !== -1) ])
        }
    }, [search])
    // clickEvent
    const [toggle, setToggle]=useState(false);
    const [selected, setSelected]=useState('');
    const onToggle=()=>setToggle(!toggle);
    const onClickSelect=(event)=>{
        setSelected(event.target.getAttribute('number'));
        setToggle(!toggle);
    }
    return (
        <div className='codeInput'>
            <div 
                role='button'
                className='codeBtn' 
                onClick={onToggle} 
                onKeyDown={onToggle}
                tabIndex={0}
            >
                {selected || '+82'}
            </div>
            {toggle &&
                <div className='numberBox'>
                    <Open 
                        onClickSelect={onClickSelect}
                        onChngSearch={onChngSearch}
                        countries={nation}    
                    />
                </div>
            }
        </div>
    );
}

export default CountryNumber;