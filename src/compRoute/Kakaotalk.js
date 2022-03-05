import React from 'react';
import { Helmet }  from 'react-helmet';
import PropTypes from 'prop-types';
import Notice from '../comp-root/Notice';
import SideMenu from '../comp-details/SideMenu';

function Kakaotalk({ title }) {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Notice 
                title='홈 > 카카오톡 '
                content='> 유용한 도움말'
            />
            <SideMenu 
                title="카카오톡"
                sideBtn={[{id:0,title:'유용한 도움말'}]}
            />
        </div>
    );
}
Kakaotalk.propTypes={
    title: PropTypes.string.isRequired,
}

export default Kakaotalk;