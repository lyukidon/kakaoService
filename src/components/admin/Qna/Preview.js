import React, { useEffect, useRef } from "react";

function Preview({ toggleList, setToggleList, toggleData, setToggleData }) {
    const previewRef = useRef(null);
    useEffect(() => {
        previewRef.current.innerHTML = toggleData.content;
    }, [toggleData]);
    return (
        <div className="previewComponent">
            <div>
                <div>{toggleData.title}</div>
                <hr />
                <div ref={previewRef} />
            </div>
        </div>
    );
}

export default Preview;
