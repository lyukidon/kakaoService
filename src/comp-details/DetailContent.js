import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../scss/details/DetailContent.scss'

function ContentTitle({ id, toggle, tips, content, explain, onClickToggle}){
    return(
        <div role='button' tabIndex={id} className={tips} onClick={onClickToggle} onKeyDown={onClickToggle}>
            <div className='tipsID inlineBlock'>{id}</div>
            <div className='tipsContentBox inlineBlock'>
                <div className={explain && toggle ? "tipsFontBold": "tipsFontNormal"}>{content}</div>
                {explain && <div className='tipsExplain'>{explain}</div>}
            </div>
            <div className='arrow inlineBlock'>&#11167;</div>
        </div>
    )
}
ContentTitle.defaultProps={
    explain: '',
}
ContentTitle.propTypes={
    id: PropTypes.number.isRequired,
    toggle:PropTypes.bool.isRequired,
    tips: PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    explain:PropTypes.string,
    onClickToggle: PropTypes.func.isRequired,
}

function Content({id, tips, content, explain}){
    const [toggle,setToggle]=useState(false);
    const onClickToggle=()=>{
        setToggle(!toggle);
    }
    return (
        <div>
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
        </div>
    )
}
Content.defaultProps={
    explain:'',
}
Content.propTypes={
    id: PropTypes.number.isRequired,
    tips: PropTypes.string.isRequired,
    content:PropTypes.string.isRequired,
    explain:PropTypes.string,
}

function DetailContent({ content }){
    return(
        <div className="tips">
            {content.map((data, index, array) => {
                const tips = data.id !== array.length ? 'tipsBox BottomLine' : 'tipsBox';
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

DetailContent.defaultProps={
    content:[],
}
DetailContent.propTypes={
    content: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        content: PropTypes.string,
        explain: PropTypes.string,
    }))
}

export default DetailContent;