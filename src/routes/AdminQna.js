import React from 'react';
import Helmet from 'react-helmet';

import { TopNav, SideNav } from "../components/admin/Nav/Index"
import Qna from '../components/admin/Qna/index'

function AdminQna() {
    return (
        <div>
            <Helmet>
                <body className="adminBody" />
            </Helmet>
            <TopNav />
            <div className="contents">
                <SideNav />
                <Qna />
            </div>
        </div>
    );
}

export default AdminQna;