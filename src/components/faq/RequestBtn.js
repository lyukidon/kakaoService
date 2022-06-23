import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../../scss/request/RequestBtn.scss";

function RequestBtn({ query }) {
    return (
        <div className="RequestBox">
            <div className="inlineBlock">
                원하시는 답변을 찾지 못하셨다면, 고객센터로 문의해 주세요
            </div>
            <Link
                to={`/qna?service=${query.service}&category=${query.category}`}
                className="inlineBlock reqButton"
            >
                <div />
                문의하기
            </Link>
        </div>
    );
}
RequestBtn.defaultProps = {
    query: [],
};
RequestBtn.propTypes = {
    query: PropTypes.shape({
        service: PropTypes.string,
        category: PropTypes.string,
        platform: PropTypes.string,
        articleId: PropTypes.string,
    }),
};

export default RequestBtn;
