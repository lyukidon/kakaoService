import React from 'react';
import PropTypes from 'prop-types';

export default Object.assign(
    ({ title })=>
        (
            <div className='classify'>{title}</div>
        )
    ,{
        propTypes: {
            title: PropTypes.string.isRequired,
        }
    }
)