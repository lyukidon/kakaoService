import React from 'react';
import styled from 'styled-components';

const Div= styled.div`
    text-align: center;
    font-size: 50px;
    font-weight:bold;
`

function Error() {
    return (
        <Div>
            404 Error
        </Div>
    );
}

export default Error;