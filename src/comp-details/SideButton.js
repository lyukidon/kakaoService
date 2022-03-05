import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function SideButton({ name }) {
    return (
        <div>
            <Link to="/kakaotalk">
                    <div>
                        {name}
                    </div>    
            </Link>
        </div>
    );
}
SideButton.defaultProps={
    name:'',
}
SideButton.propTypes={
    name: PropTypes.string,
}

export default SideButton;