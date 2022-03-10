import React from 'react';
import DetailMain from './DetailMain';
import '../scss/details/Detail.scss';

function Detail({ tipsData, content, platform }) {

    return (
        <div className='inlineBlock Detail'>
            <DetailMain
                key={tipsData.lang}
                classify={tipsData.classify}
                content={content}
                platform={platform}
            />
        </div>
    );
}

export default Detail;