import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Notice from '../comp-root/Notice';

General.propTypes = {
    title: PropTypes.string
};

function General({ title }) {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Notice />  
        </>
    );
}

export default General;