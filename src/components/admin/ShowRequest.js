import React from "react";
import styled from "styled-components";

const ContentBox = styled.div`
    margin-bottom: 20px;
`;
const ContentNumber = styled.div`
    display: inline-block;
    margin-right: 20px;
    vertical-align: top;
    font-weight: bold;
`;
const ContentTitle = styled.div`
    display: inline-block;
    margin-bottom: 10px;
    font-weight: bold;
`;
const requestTemp = [
    {
        id: 1,
        title: "카카오톡이 안보내져요",
        content: "인터넷에 연결되어 있는데, 카카오톡이 보내지지 않아요",
    },
    {
        id: 2,
        title: "이모티콘 플러스를 환불받고 싶어요",
        content:
            "결제 후 2주가 지났는데 환불받고 싶어요. 기간 별로 환불을 받을 수 있나요?",
    },
];

const ShowRequest = () => (
    <div className="showRequest">
        <h4>최근 문의 글</h4>
        {requestTemp.map((contents) => (
            <ContentBox key={contents.id}>
                <ContentNumber>{contents.id}</ContentNumber>
                <div className="inlineBlock">
                    <ContentTitle className="inlineBlock">
                        {contents.title}
                    </ContentTitle>
                    <div>{contents.content}</div>
                </div>
            </ContentBox>
        ))}
    </div>
);
ShowRequest.displayName = "ShowRequest";

export default ShowRequest;
