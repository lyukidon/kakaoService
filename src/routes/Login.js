import React, { useState } from "react";

import Login from "../components/admin/Login";

function RouteLogin({ setUsername }) {
    return (
        <div>
            <Login setUsername={setUsername} />
        </div>
    );
}

export default RouteLogin;
