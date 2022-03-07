import React from 'react';
import { Helmet }  from 'react-helmet';
import PropTypes from 'prop-types';
import Notice from '../comp-root/Notice';
import SideMenu from '../comp-details/SideMenu';
import Detail from '../comp-details/Detail';


function Kakaotalk({ title }) {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Notice 
                title='홈'
                content=' > 카카오톡 > 유용한 도움말'
            />
            <div className='common-width'>                
                <SideMenu 
                    title="카카오톡"
                    sideBtn={[{id:0,title:'유용한 도움말'}]}
                />
                <Detail />
            </div>
        </div>
    );
}
Kakaotalk.propTypes={
    title: PropTypes.string.isRequired,
}

export default Kakaotalk;