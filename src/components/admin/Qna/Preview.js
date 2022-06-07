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
            문의
            <div className="questionPrev">
                <div>{toggleData.title}</div>
                <hr />
                <div ref={previewRef} />
            </div>
            답변
            <div className="answerPrev">
                <div ref={answerRef} />
            </div>
        </div>
    );
}

export default Preview;
