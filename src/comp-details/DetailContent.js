import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../scss/details/DetailContent.scss'

function ContentTitle({ id, toggle, tips, content, onClickToggle, explain}){
    return(
        <div className={tips} onClick={onClickToggle}>
            <div className='tipsID inlineBlock'>{id}</div>
            <div className='tipsContentBox inlineBlock'>
                <div className={explain && toggle ? "tipsFontBold": "tipsFontNormal"}>{content}</div>
                {explain && <div className='tipsExplain'>{explain}</div>}
            </div>
            <div className='arrow inlineBlock'>&#11167;</div>
        </div>
    )
}

function Content({id, tips, content, explain}){
    const [toggle,setToggle]=useState(false);
    const onClickToggle=()=>{
        setToggle(!toggle);
        console.log(explain)
    }
    return (
        <>
            {!toggle ? 
                <ContentTitle 
                    id={id}
                    toggle={toggle}
                    tips={tips}
                    content={content}
                    onClickToggle={onClickToggle}
                /> : 
                <ContentTitle
                    id={id}
                    toggle={toggle}
                    tips={tips}
                    content={content}
                    onClickToggle={onClickToggle}
                    explain={explain}
                /> }
        </>
    )
}

function DetailContent({ content }){
    return(
        <div className="tips">
            {content.map((data, index, array) => {
                const tips = data.id !== array.length ? 'tipsBox BottomLine' : 'tipsBox';
                console.log(data)
                return (
                    <Content
                        key={data.id}
                        tips={tips}
                        id={data.id}
                        content={data.content}
                        explain={data.explain}
                    />
                );
            })}
        </div>
    );
};

DetailContent.propTypes = {
    
};

export default DetailContent;