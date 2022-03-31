import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import '../scss/details/Detail.scss';
import '../scss/details/DetailContent.scss'

const Title=styled.div`
    margin: 45px 0px;
    font-size: xx-large;
    font-weight: bolder;
`
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
UsefulTipsContent.propTypes={
    tips: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
}

function UsefulTips({useful}) {
    return (
        <div className='inlineBlock Detail'>
                <Title>유용한 도움말</Title>
            <div className='tips'>
                {useful.map((data,index,array) => {
                    const tips = index+1 !== array.length ? 'tipsBox BottomLine' : 'tipsBox';
                    return(
                        <UsefulTipsContent
                            key={data.id}
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
UsefulTips.propTypes={
    useful:PropTypes.arrayOf({
        id:PropTypes.number,
        content:PropTypes.string,
        explain:PropTypes.string, 
    }).isRequired,
}

export default UsefulTips;