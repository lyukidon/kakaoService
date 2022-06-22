import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import styled from "styled-components";

const RightArrow = styled.div`
    display: inline-block;
    margin: 0px 10px;
    background: url("/ico.png") no-repeat -84px -24px;
    width: 5px;
    height: 9px;
`;

function BreadCrumbs({ query }) {
    const [service, setService] = useState("");
    const [category, setCategory] = useState([]);

    useEffect(() => {
        axios.get("/data/faqMain.json").then((res) => {
            setService(res.data.service[query.service]);
            if (query.category) {
                setCategory([
                    ...res.data.category[query.service][query.category],
                ]);
            }
        });
    }, [query]);
    return (
        <div className="breadcrumb">
            <Link to="/">홈</Link>
            <RightArrow />
            <Link to={`/faq?service=${query.service}`}>{service}</Link>
            <RightArrow />
            {query.category ? (
                <Link
                    to={`?service=${query.service}&category=${query.category}`}
                >
                    {category}
                </Link>
            ) : (
                <span>유용한 도움말</span>
            )}
        </div>
    );
}
BreadCrumbs.defaultProps = {
    query: [],
};
BreadCrumbs.propTypes = {
    query: PropTypes.shape({
        service: PropTypes.string,
        category: PropTypes.string,
        platform: PropTypes.string,
        articleId: PropTypes.string,
    }),
};

export default BreadCrumbs;
