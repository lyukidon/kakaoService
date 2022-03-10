import React from 'react';
import PropTypes from 'prop-types';

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
    );
};

DetailContent.propTypes = {
    
};

export default DetailContent;