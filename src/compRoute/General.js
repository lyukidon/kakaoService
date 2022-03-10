import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Notice from '../comp-root/Notice';
import SideMenu from '../comp-details/SideMenu';
import Detail from '../comp-details/Detail';

function General({ title }) {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Notice title='홈' content=' > 카카오톡 > 일반' />
            <div className='common-width'>   
                <SideMenu />
                <Detail />
            </div>

        </>
    );
}
General.propTypes = {
    title: PropTypes.string.isRequired
};

export default General;