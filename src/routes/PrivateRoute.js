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
                        <Navigate replace to="/admin/dashboard" />
                    ) : (
                        <Navigate replace to="/admin/login" />
                    )
                }
            />
            <Route
                path="/dashboard"
                element={
                    username ? <Admin /> : <Navigate replace to="/admin" />
                }
            />
            <Route
                path="/login"
                element={
                    username ? (
                        <Navigate replace to="/admin" />
                    ) : (
                        <Login setUsername={setUsername} />
                    )
                }
            />
        </Routes>
    );
}

export default PrivateRoute;
