import React, { useEffect, useRef } from "react";

function Preview({ toggleList, setToggleList, toggleData, setToggleData }) {
    const previewRef = useRef(null);
    const answerRef = useRef(null);
    useEffect(() => {
        previewRef.current.innerHTML = toggleData.content;
        answerRef.current.innerHTML = toggleData.answer;
    }, [toggleData]);
    return (
        <div className="previewComponent">
            <div>{toggleData.title}</div>
            <hr />
            <div ref={previewRef} />
            <div>답변:</div>
            <div ref={answerRef} />
        </div>
    );
}

export default Preview;
