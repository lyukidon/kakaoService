import React from 'react';
import PropTypes from 'prop-types';
import '../common.scss';
import '../scss/Notice.scss';

function Notice({ title, content }) {
    return (
        <div className='noticeBox'>
            <div  className='common-width'>
                <span><strong>{title}</strong></span><span>{content}</span>
            </div>
        </div>
    );
}
Notice.defaultProps={
    title:'',
    content:'',
}
Notice.propTypes={
    title: PropTypes.string,
    content: PropTypes.string,
}

export default Notice;