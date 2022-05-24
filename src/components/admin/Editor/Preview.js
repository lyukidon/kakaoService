import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
const Close = styled.button`
    width: 30px;
    background-color: #ffffff;
    border: none;
    border-radius: 7px;
    color: red;
    &:hover {
        background-color: #dddddd;
    }
`;

function Preview({ setPreview, setArticleId, singleArti }) {
    const explainRef = useRef(null);
    useEffect(() => {
        explainRef.current.innerHTML = singleArti.explain;
    }, [singleArti]);
    return (
        <div>
            <Title>
                <b>{singleArti.content}</b>
                <Close
                    type="button"
                    onClick={() => {
                        setPreview(false);
                        setArticleId(-1);
                        console.log(setArticleId);
                    }}
                >
                    <FontAwesomeIcon icon="fa-solid fa-x" size="lg" />
                </Close>
            </Title>
            <hr />
            <div className="previewExplain" ref={explainRef} />
        </div>
    );
}

export default Preview;
