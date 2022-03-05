import React from 'react';
import PropTypes from 'prop-types';

function MainAllMenu({ title, services }){
    return (
        <div className='MainAllMenu inlineBlock'>
            <div className='title'><b>{title}</b></div>
            {services.map((serviceData)=>{
                const {serviceName,id} = serviceData;
                return(
                    <div key={id} className='AllMenus'>
                        <a href='#;'>{serviceName}</a>
                    </div>
                )
            })}
        </div>
    );
}
MainAllMenu.defaultProps={
    title:'',
    services:[],
}
MainAllMenu.propTypes={
    title: PropTypes.string,
    services: PropTypes.arrayOf(PropTypes.shape({
        serviceName: PropTypes.string,
        serviceUrl: PropTypes.string,
    })),    
}

export default MainAllMenu;