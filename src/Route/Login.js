import React from 'react';
import styled from 'styled-components';

export default ()=>{
	return(
		<form>
			<div>
				아이디
				<input type='text'/>
			</div>
			<div>
				비밀번호
				<input type='password' />
			</div>
			<button type='button'>로그인</button>
		</form>
	);
}
