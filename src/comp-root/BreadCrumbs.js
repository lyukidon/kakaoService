import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../common.scss';
import '../scss/root/Notice.scss';

function Notice({ title, content, classify }) {
    const { breadCrumb } = useSelector(state => state);
    return (
        <div className='noticeBox'>
            <div  className='common-width'>
                <Link to={`/`}>
                    홈
                </Link>
                <div className='right_arrow'></div>
                <Link to={`/helps?service=${breadCrumb.service}`}>
                    {breadCrumb.service_name ? breadCrumb.service_name : '중간'}
                </Link>
                <div className='right_arrow'></div>
                <Link to={`/helps?service=${breadCrumb.service}&category=${breadCrumb.category}`}>
                    {breadCrumb.category_name}
                </Link>
            </div>
        </div>
    );
}
Notice.defaultProps={
    title:'',
    content:'',
    classify:'',
}
Notice.propTypes={
    title: PropTypes.string,
    content: PropTypes.string,
    classify: PropTypes.string,
}

export default Notice;