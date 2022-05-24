import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const Cancel = styled.button`
    padding: 0px 7px;
    background-color: #ffffff;
    border: 1px solid #909090;
    border-radius: 7px;
    &:hover{
        background-color: #dddddd;
    }
    > svg {
        margin-right: 5px;
        color: red;
    }
    
`

function Preview({ setPreview, setArticleId, singleArti }) {
    const explainRef = useRef(null);
    useEffect(() => {
        explainRef.current.innerHTML = singleArti.explain;
    }, [singleArti]);
    return (
        <div>
            <Title>
                <b>{singleArti.content}</b>
                <Cancel
                    type="button"
                    onClick={() => {
                        setPreview(false);
                        setArticleId(-1)
                        console.log(setArticleId)
                    }}
                >
                    <FontAwesomeIcon icon="fa-solid fa-x" />
                    닫기
                </Cancel>
            </Title>
            <hr />
            <div className="previewExplain" ref={explainRef} />
        </div>
    );
}

export default Preview;
