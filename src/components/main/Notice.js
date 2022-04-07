import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../scss/main/Notice.scss";

function Notice({ title, content }) {
    return (
        <div className="noticeBox">
            <div className="common-width">
                <span>
                    <Link to="/">
                        <strong>{title}</strong>
                    </Link>
                </span>
                <span>{content}</span>
            </div>
        </div>
    );
}
Notice.defaultProps = {
    title: "",
    content: "",
};
Notice.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
};

export default Notice;
