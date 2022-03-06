import React from 'react';
import PropTypes from 'prop-types';

function UsefulTips({ classify, contents }) {
    return (
        <div>
            <h2>{classify}</h2>
            {contents.map( data => (
                <div key={data.id}>
                    <span>{data.id}</span>
                    <span>{data.content}</span>
                </div>
            ))}
        </div>
    );
}
UsefulTips.defaultProps={
    contents:[],
}
UsefulTips.propTypes={
    classify: PropTypes.string.isRequired,
    contents: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        content: PropTypes.string,
    }))
}

export default UsefulTips;