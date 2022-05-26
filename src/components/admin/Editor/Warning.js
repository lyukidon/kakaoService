import React from "react";
import styled from "styled-components";

const Warning= styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    padding: 10px;
    background-color: #ffffff;
`;

export default ({ setWarn }) => {
    return (
        <Warning>
            <div>삭제 하시겠습니까</div>
            <div>
                <button type="button">예</button>
                <button type="button" onClick={()=>{setWarn(false)}}>아니오</button>
            </div>
        </Warning>
    );
};
