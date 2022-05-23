import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
                <button
                    type="button"
                    onClick={() => {
                        setPreview(false);
                        setArticleId(-1)
                        console.log(setArticleId)
                    }}
                >
                    <FontAwesomeIcon icon="fa-solid fa-x" />
                    닫기
                </button>
            </Title>
            <hr />
            <div className="previewExplain" ref={explainRef} />
        </div>
    );
}

export default Preview;
