import React, { useState } from "react";

import Login from "../components/admin/Login";
import Footer from '../components/layout/Footer';

function RouteLogin({ setUsername }) {
    return (
        <div>
            <Login setUsername={setUsername} />
            <Footer />
        </div>
    );
}

export default RouteLogin;
