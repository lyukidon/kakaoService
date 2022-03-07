import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../scss/details/SideButton.scss'

function SideButton({ name }) {
    return (
        
            <Link to="/kakaotalk" className='SideButton'>
                <b>
                    {name} 
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