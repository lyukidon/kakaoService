import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/main/Footer";
import Main from "./routes/Main";
import Error from "./routes/Error";
import Admin from "./routes/Admin";

import Menu from "./routes/Faq";
import Req from "./routes/Req";
import Login from "./routes/Login";

import "./scss/common.scss";

function App() {
    return (
        <div>
            <Routes>
                <Route path="*" element={<Error />} />
                <Route path="faq" element={<Menu />} />
                <Route path="requests" element={<Req />} />
                <Route path="login" element={<Login />} />
                <Route path="admin" element={<Admin />} />
                <Route path="/" element={<Main />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
