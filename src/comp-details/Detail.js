import React from 'react';
import DetailContent from './DetailContent';
import '../scss/details/Detail.scss';

function Detail({ tipsData }) {

    return (
        <div className='inlineBlock Detail'>
            <DetailContent
                key={tipsData.lang}
                classify={tipsData.classify}
                contents={tipsData.contents}
            />
        </div>
    );
}

export default Detail;