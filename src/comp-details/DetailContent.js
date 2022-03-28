import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import '../scss/details/DetailContent.scss'

function ContentTitle({ id, toggle, tips, content, explain, onQuery, onClickToggle}){
    const { query,osType } = useSelector(state => state);
    const { service, category } = query;
    return(
        <div 
                role='button' 
                tabIndex={id} 
                className={tips}
                onClick={onClickToggle} 
                onKeyDown={onClickToggle}
        >
            <div className='tipsID inlineBlock'>{id}</div>
            <div className='tipsContentBox inlineBlock'>
                <Link 
                    to={`?service=${service}&category=${category}&platform=${osType}${!toggle ? `&articleId=${id}`:``}`}
                    className={explain && toggle ? "tipsFontBold": "tipsFontNormal"}
                >
                    {content}
                </Link>
                {explain && <div className='tipsExplain'>{explain}</div>}
            </div>
            <div className='downwards-arrow inlineBlock' />
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

function Content({id, tips, content, explain, onQuery}){
    const { query } = useSelector(state => state);
    const { articleId } = query;

    const [toggle,setToggle]=useState(false);
    useEffect(()=>{
        +articleId === +id && setToggle(!toggle)
    },[])
    const onClickToggle=()=>{
        setToggle(!toggle);
        onQuery();
    }
    return (
        <div>
            {toggle ? 
                <ContentTitle
                    id={id}
                    toggle={toggle}
                    tips={tips}
                    content={content}
                    onClickToggle={onClickToggle}
                    explain={explain}
                    onQuery={onQuery}
                />
                :
                <ContentTitle 
                    id={id}
                    toggle={toggle}
                    tips={tips}
                    content={content}
                    onClickToggle={onClickToggle}
                    onQuery={onQuery}
                /> 
            }
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

function DetailContent({ content, onQuery }){
    return(
        <div className="tips">
            {content.map((data, index, array) => {
                const tips = data.id !== array.length ? 'tipsBox BottomLine' : 'tipsBox';
                return (
                    <Content
                        onQuery={onQuery}
                        key={data.id}
                        tips={tips}
                        id={index+1}
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