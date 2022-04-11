import React, { useEffect, useReducer } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Admin from "../components/admin/Admin";

import "../scss/admin/admin.scss";

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

function RouteAdmin() {
    const params = useParams();
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
    });

    const getfaq = async () => {
        dispatch({ type: "LOADING" });
        try {
            const response = await axios.get("/data/faq_temp.json");
            dispatch({ type: "SUCCESS", data: response.data });
        } catch (err) {
            dispatch({ type: "ERROR", error: err });
        }
    };
    useEffect(() => {
        getfaq();
    }, []);
    const { data } = state;

    return (
        <div>
            <Admin faqData={data} params={params} />
        </div>
    );
}
export default RouteAdmin;
