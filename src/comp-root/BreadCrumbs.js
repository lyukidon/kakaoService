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
                <Link to={`/`} onClick={onQuery}>
                    홈
                </Link>
                <div className='right_arrow'></div>
                <Link 
                    to={`/helps?service=${breadCrumb.service}`}
                    onClick={onQuery}
                >
                    {breadCrumb.service_name ? breadCrumb.service_name : '중간'}
                </Link>
                <div className='right_arrow'></div>
                <Link 
                    to={`/helps?service=${breadCrumb.service}&category=${breadCrumb.category}`}
                    onClick={onQuery}    
                >
                    {breadCrumb.category_name}
                </Link>
            </div>
        </div>
    );
}

export default Notice;