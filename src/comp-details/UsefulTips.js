import React from 'react';
import '../scss/details/Detail.scss';
import '../scss/details/DetailContent.scss'

function UsefulTipsContent({ tips, index, content }){
    return(
        <div className={tips} >
            <div className='tipsID inlineBlock'>{index}</div>
            <div className='tipsFontNormal inlineBlock'>{content}</div>
        </div>
    )
}

function UsefulTips({useful}) {
    return (
        <div className='inlineBlock Detail'>
                <h1>유용한 도움말</h1>
            <div className='tips'>
                {useful.map((data,index,array) => {
                    const tips = index+1 !== array.length ? 'tipsBox BottomLine' : 'tipsBox';
                    return(
                        <UsefulTipsContent 
                            tips={tips}
                            index={index+1}
                            content={data.content}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default UsefulTips;