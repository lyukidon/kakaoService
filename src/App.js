import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Main from "./routes/Main";
import Error from "./routes/Error";
import Admin from "./routes/Admin";

import Menu from "./routes/Faq";
import Request from "./routes/Request";

import "./scss/common.scss";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="faq" element={<Menu />} />
                <Route path="requests" element={<Request />} />
                <Route path="admin" element={<Admin />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
