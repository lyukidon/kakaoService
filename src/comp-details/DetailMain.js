import React from 'react';
import PropTypes from 'prop-types';
import Platform from './Platform';
import '../scss/details/UsefulTips.scss'

function DetailContent({ content }){
    return(
        <div className="tips">
            {content.map((data, index, array) => {
                const tips = data.id !== array.length ? 'tipsBox BottomLine' : 'tipsBox';
                return (
                    <div key={data.id} className={tips}>
                        <span className='tipsID'>{data.id}</span>
                        <span className='tipsContent'>{data.content}</span>
                    </div>
                )
            })}
        </div>
    )
}

function DetailMain({ classify, content, platform }) {
    return (
        <div>
            <div className='classify'>{classify}</div>
            {platform && <Platform platform={platform} />}
            <DetailContent content={content} />
        </div>
    );
}
DetailContent.defaultProps={
    content:[],
}
DetailContent.propTypes={
    classify: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        content: PropTypes.string,
    }))
}

export default DetailMain;