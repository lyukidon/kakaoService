import React from 'react';
import PropTypes from 'prop-types';
// component
import DetailMain from './DetailMain';
import RequestBtn from './RequestBtn';

import '../scss/details/Detail.scss';

function Detail({usefulCheck, content, platform, onQuery, categoryName }) {
    return (
        <div className='inlineBlock Detail'>
            <DetailMain
                onQuery={onQuery}
                categoryName={categoryName}
                content={content}
                platform={platform}
            />
            {!usefulCheck && <RequestBtn />}
        </div>
    );
}

Detail.defaultProps={
    content:[],
    platform:[]
}
Detail.propTypes={
    tipsData:PropTypes.shape({
        lang: PropTypes.string,
        classify: PropTypes.string,
    }).isRequired,
    content: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        content:PropTypes.string,
        explain:PropTypes.string,
    }))),
    platform:PropTypes.arrayOf(PropTypes.string),
    usefulCheck: PropTypes.string.isRequired,
    onQuery: PropTypes.func.isRequired,
    categoryName: PropTypes.string.isRequired,
}

export default Detail;