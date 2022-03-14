import React, { useState } from 'react';

function Category(){

}

export default ()=>{
    const [category, setCategory]=useState([
		{
			first:'일반문의',
			second:[
				'안드로이드', 'iOS', '안드로이드(원스토어)'
			]
		},{
			first:'인증번호',
			second:[
				'안드로이드', 'iOS', 'Windows', '안드로이드(원스토어)'
			]
		}
	])
	const [select1,setSelect1]=useState('');
	const onChange=(event)=>{
		setSelect1(event.target.value);
	}
    return(
		//첫번째 카테고리
		<div>
			<select onChange={onChange} name="category1" id="">
				{category.map(data => (
					<option key={data.first} value={data.first}>
						{data.first}
					</option>
				))}
			</select>
			<select name="" id="">
					{select1 && 
						category
						.filter(data => data.first === select1)[0].second
						.map(data => (
							<option value={data}>{data}</option>
						))}
			</select>
		</div>
    )
}