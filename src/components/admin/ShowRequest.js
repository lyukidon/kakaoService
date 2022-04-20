import React, { forwardRef } from "react";

const request_temp = [
    {
        id:1,
        title:"카카오톡이 안보내져요",
        content:"인터넷에 연결되어 있는데, 카카오톡이 보내지지 않아요"
    },{
        id:2,
        title:"이모티콘 플러스를 환불받고 싶어요",
        content:"결제 후 2주가 지났는데 환불받고 싶어요. 기간 별로 환불을 받을 수 있나요?"
    },

]

const ShowRequest = forwardRef(({ props }, scrollRef) => (
    <div className="showRequest">
        <h4
            ref={(element) => {
                scrollRef.current[3] = element;
            }}
        >
            최근 문의 글
        </h4>
        {request_temp.map( contents => (
            <div>

                <div>{contents.title}</div>
                <div>{contents.content}</div>
            </div>

        ))}
    </div>
));
ShowRequest.displayName = "ShowRequest";

export default ShowRequest;
