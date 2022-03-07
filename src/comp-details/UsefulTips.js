import React from 'react';
import PropTypes from 'prop-types';
import '../scss/details/UsefulTips.scss'

function UsefulTips({ classify, contents }) {
    return (
        <div>
            <div className='classify'>{classify}</div>
            <div className="tips">
                {contents.map( function(data,index,array){
                    const tips = data.id !== array.length ? 'tipsBox BottomLine': 'tipsBox';
                    console.log(tips)
                    return(
                        <div key={data.id} className={tips}>
                            <span className='tipsID'>{data.id}</span>
                            <span className='tipsContent'>{data.content}</span>
                        </div>
                    )
                })}
            </div>
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