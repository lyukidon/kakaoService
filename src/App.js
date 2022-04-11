import React from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/layout/Footer";
import Main from "./routes/Main";
import Error from "./routes/Error";
import Admin from "./routes/Admin";
import Faq from "./routes/Faq";
import Request from "./routes/Request";
import Login from "./routes/Login";

import useStore from "./store/store";

import "./scss/common.scss";

function App() {
    const { login } = useStore();
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/qna" element={<Request />} />
                <Route path="/admin">
                    <Route path="login" element={<Login />} />
                    {login && <Route path=":id" element={<Admin />} />}
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
