import React from 'react';
import Helmet from 'react-helmet';

import WebEditor from '../components/admin/WebEditor';
import {TopNav, SideNav} from "../components/admin/Nav";

function Editor({data}) {
    return (
        <div className="admin">
            <Helmet>
                <body className="adminBody" />
            </Helmet>
            <TopNav />
            <div className="contents">
                <SideNav />
                <div className="dashboard">
                    <WebEditor faqData={data} />
                </div>
            </div>
        </div>
    );
}

export default Editor;