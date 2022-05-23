import React, { useEffect, useRef } from "react";

function Preview({ singleArti }) {
    const explainRef = useRef(null);
    useEffect(() => {
        explainRef.current.innerHTML = singleArti.explain;
    }, [singleArti]);
    return (
        <div>
            <div>
                <b>{singleArti.content}</b>
            </div>
            <hr />
            <div className="previewExplain" ref={explainRef} />
        </div>
    );
}

export default Preview;
