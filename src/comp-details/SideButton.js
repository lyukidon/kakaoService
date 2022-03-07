import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../scss/details/SideButton.scss'

function SideButton({ title, url }) {
    const menuurl=`/Kakaotalk/${url}`;
    return (
            <Link to={menuurl} className='SideButton'>
                <b>
                    {title} 
                </b>
            </Link>
        
    );
}
SideButton.defaultProps={
    name:'',
}
SideButton.propTypes={
    name: PropTypes.string,
}

export default SideButton;