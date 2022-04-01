import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import '../scss/details/DetailContent.scss'

function Content({id, bottomLine, content, explain, onQuery}){
    const { query, osType } = useSelector(state => state);
    const { service, category, articleId } = query;

    const [toggle,setToggle]=useState(false);
    useEffect(()=>{
        if(+articleId === +id){
            setToggle(!toggle);
        }
    },[])
    const onClickToggle=()=>{
        setToggle(!toggle);
        onQuery();
    }
    return (
        <div 
            role='button'
            tabIndex={id}
            className={bottomLine}
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
                {explain && toggle && <div className='tipsExplain'>{explain}</div>}
            </div>
            <div className='downwards-arrow inlineBlock' />
        </div>
    )
}
Content.defaultProps={
    explain:'',
}
Content.propTypes={
    id: PropTypes.number.isRequired,
    content:PropTypes.string.isRequired,
    explain:PropTypes.string,
    bottomLine:PropTypes.string.isRequired,
    onQuery: PropTypes.func.isRequired,
}

function DetailContent({ content, onQuery }){
    return(
        <div className="tips">
            {content.map((data, index, array) => {
                const bottomLine = data.id !== array.length ? 'tipsBox BottomLine' : 'tipsBox';
                return (
                    <Content
                        onQuery={onQuery}
                        key={data.id}
                        bottomLine={bottomLine}
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
    })),
    onQuery: PropTypes.func.isRequired,
}

export default DetailContent;