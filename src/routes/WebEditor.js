import React from 'react';
import Helmet from 'react-helmet';

import EditArticle from '../components/admin/EditArticle/Index';
import {TopNav, SideNav} from "../components/admin/Nav";

function Editor({data}) {
    return (
        <div>
            <Helmet>
                <body className="adminBody" />
            </Helmet>
            <TopNav />
            <div className="contents">
                <SideNav />
                <div className="dashboard">
                    <EditArticle faqData={data} />
                </div>
            </div>
        </div>
    );
}

export default Editor;