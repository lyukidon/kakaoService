import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import Warning from "./Warning";

const Title = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

function Preview({ handleFunc, setPreview, setActivateEditor, setArticleId, singleArti, setSingleArti }) {
    const explainRef = useRef(null);
    useEffect(() => {
        explainRef.current.innerHTML = singleArti.explain;
    }, [singleArti]);
    const [warn, setWarn] = useState(false);
    return (
        <div>
            <Title>
                <b>{singleArti.content}</b>
                <div>
                    {/* 에디터 버튼 */}
                    <button type="button" onClick={()=>{console.log("click")}}>
                        <FontAwesomeIcon
                            icon="fa-solid fa-pen-to-square"
                            size="lg"
                        />
                    </button>
                    {/* 삭제 버튼 */}
                    <button
                        type="button"
                        onClick={() => {
                            setWarn(!warn);
                        }}
                    >
                        <FontAwesomeIcon icon="fa-solid fa-trash" size="lg" />
                    </button>
                {warn && <Warning setWarn={setWarn}/>}
                </div>
            </Title>
            <hr />
            <div className="previewExplain" ref={explainRef} />
        </div>
    );
}

export default Preview;
