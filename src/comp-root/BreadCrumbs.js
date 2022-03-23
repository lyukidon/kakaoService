import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../common.scss';
import '../scss/root/Notice.scss';

function Notice({onQuery }) {
    const { breadCrumb } = useSelector(state => state);
    return (
        <div className='noticeBox'>
            <div  className='common-width'>
                <div className='inlineBlock' onClick={onQuery}>
                    <Link to={`/`}>홈</Link>
                </div>
                <div className='right_arrow'></div>
                <div className='inlineBlock' onClick={onQuery}>
                    <Link to={`/helps?service=${breadCrumb.service}`}>
                        {breadCrumb.service_name}
                    </Link>
                </div>
                <div className='right_arrow'></div>
                <div className='inlineBlock' onClick={onQuery}>
                    <Link 
                        to={`/helps?service=${breadCrumb.service}&category=${breadCrumb.category}`}
                    >
                        {breadCrumb.category_name}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Notice;