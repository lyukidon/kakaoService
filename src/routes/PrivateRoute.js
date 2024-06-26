import React, { useEffect, useReducer } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import useLocalStorage from "../hooks/useLocalStorage";

import Admin from "./Admin";
import Login from "./Login";
import AdminFaq from "./AdminFaq";
import AdminQna from "./AdminQna"

const adminPath = ["/admin/dashboard", "/admin/faq"];

function reducer(state, action) {
    switch (action.type) {
        case "LOADING":
            return {
                loading: true,
                data: null,
                error: null,
            };
        case "SUCCESS":
            return {
                loading: false,
                data: action.data,
                error: null,
            };
        case "ERROR":
            return {
                loading: false,
                data: null,
                error: action.error,
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function PrivateRoute() {
    const [username, setUsername] = useLocalStorage("userId", "");
    const location = useLocation();

    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
    });
    useEffect(() => {
        const getfaq = async () => {
            dispatch({ type: "LOADING" });
            try {
                const response = await axios.get("/data/faqAdmin.json");
                dispatch({ type: "SUCCESS", data: response.data });
            } catch (err) {
                dispatch({ type: "ERROR", error: err });
            }
        };
        getfaq();
    }, []);
    const { data } = state;
    return (
        <Routes>
            <Route
                path="/*"
                element={
                    username ? (
                        <Navigate
                            replace
                            to={
                                adminPath.indexOf(location.pathname) !== -1
                                    ? location.pathname
                                    : adminPath[0]
                            }
                        />
                    ) : (
                        <Navigate replace to="/admin/login" />
                    )
                }
            />
            <Route
                path="/dashboard"
                element={
                    username ? (
                        <Admin faqData={data} />
                    ) : (
                        <Navigate replace to="/admin" />
                    )
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
            <Route
                path="/faq"
                element={
                    username ? (
                        <AdminFaq faqData={data} />
                    ) : (
                        <Navigate replace to="/admin" />
                    )
                }
            />
            <Route
                path="/qna"
                element={
                    username ? (
                        <AdminQna />
                    ) : (
                        <Navigate replace to="/admin" />
                    )
                }
            />
        </Routes>
    );
}

export default PrivateRoute;
