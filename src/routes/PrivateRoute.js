import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

import Admin from "./Admin";
import Login from "./Login";

function PrivateRoute() {
    const [username, setUsername] = useLocalStorage("userId", "");
    return (
        <Routes>
            <Route
                path="/*"
                element={
                    username ? (
                        <Admin />
                    ) : (
                        <Navigate replace to="/admin/login" />
                    )
                }
            />
            <Route
                path="/login"
                element={<Login setUsername={setUsername} />}
            />
        </Routes>
    );
}

export default PrivateRoute;
