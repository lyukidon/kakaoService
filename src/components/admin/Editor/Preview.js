import React, { useEffect, useRef } from "react";

function Preview({ singleArti }) {
    const explainRef=useRef(null);
    useEffect(()=>{
        explainRef.current.innerHTML = singleArti.explain;
    },[])
    return (
        <div>
            <div>제목</div>
            <div>{singleArti.content}</div>
            <div>내용</div>
            <div ref={explainRef} />
        </div>
    );
}

export default Preview;
