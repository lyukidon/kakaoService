import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../common.scss';
import '../scss/root/Notice.scss';

function Notice({ title, content, classify }) {
    const { breadCrumb } = useSelector(state => state
    //     ({        
    //     service: state.breadCrumb.service,
    //     category: state.breadCrumb.category,
    // })
    );
    return (
        <div className='noticeBox'>
            <div  className='common-width'>
                <span>
                    <Link to="/">
                        <strong>{title}</strong>
                    </Link>
                </span>
                <span>{breadCrumb.service}</span>
                <span>{breadCrumb.category}</span>
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