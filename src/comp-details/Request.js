import React from 'react';
import PropTypes from 'prop-types';

function Request({ onReqClick }) {
    return (
        <div>
            hi
            <button type='button' onClick={onReqClick} onKeyDown={onReqClick}>문의접수</button>
        </div>
    );
}
Request.propTypes={
    onReqClick: PropTypes.func.isRequired,
}

export default Request;