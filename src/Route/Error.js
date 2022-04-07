import React from 'react';
import styled from 'styled-components';

const ErrMessage= styled.div`
    text-align: center;
    font-size: 50px;
    font-weight:bold;
`

function Error() {
    return (
        <ErrMessage>
            404 Error
        </ErrMessage>
    );
}

export default Error;