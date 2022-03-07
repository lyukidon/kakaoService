import React from 'react';
import PropTypes from 'prop-types';
import SideButton from './SideButton';
import '../scss/details/SideMenu.scss';

function SideMenu({ title, sideBtn }) {
    return (
        <div className='inlineBlock sideMenu'>
            <h3>{ title }</h3>
            {sideBtn.map( name => (
                <SideButton key={name.id} name={name.title} />
            ))}
        </div>
    );
}
SideMenu.defaultProps={
    sideBtn:[]
}
SideMenu.propTypes={
    title: PropTypes.string.isRequired,
    sideBtn: PropTypes.arrayOf(PropTypes.string),
}

export default SideMenu;