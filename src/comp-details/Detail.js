import React from 'react';
import DetailContent from './DetailContent';
import '../scss/details/Detail.scss';

function Detail({ tipsData, content }) {

    return (
        <div className='inlineBlock Detail'>
            <DetailContent
                key={tipsData.lang}
                classify={tipsData.classify}
                content={content}
            />
        </div>
    );
}

export default Detail;