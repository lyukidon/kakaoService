import React from 'react';
import PropTypes from 'prop-types';

// import UsefulTips from './UsefulTips';
import DetailMain from './DetailMain';
import RequestBtn from './RequestBtn';

import '../scss/details/Detail.scss';

function Detail({usefulCheck, tipsData, content, platform, onQuery }) {
    return (
        <div className='inlineBlock Detail'>
                <>
                    <DetailMain
                        onQuery={onQuery}
                        key={tipsData.lang}
                        classify={tipsData.classify}
                        content={content}
                        platform={platform}
                    />
                    {!usefulCheck && <RequestBtn />}
                </>
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
}

export default Detail;