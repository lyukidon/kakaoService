import React, { forwardRef } from "react";

const LastRequest = forwardRef(({ props }, scrollRef) => (
    <div className="Box">
        <h4
            ref={(element) => {
                scrollRef.current[3] = element;
            }}
        >
            최근 문의 글
        </h4>
    </div>
));
LastRequest.displayName = "LastRequest";

export default LastRequest;
