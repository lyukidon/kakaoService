import React from 'react';
import styled from 'styled-components';

import '../scss/details/Detail.scss';
import '../scss/details/DetailContent.scss'

const Content=styled.div`
    font-size: large;
`

function UsefulTipsContent({ tips, index, content }){
    return(
        <Content className={tips} >
            <div className='tipsID inlineBlock' style={{color:'orange', fontSize:"larger"}}>
                {index}
            </div>
            <div className='tipsContentBox inlineBlock'>
                <div className='tipsFontNormal inlineBlock'>{content}</div>
            </div>
        </Content>
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