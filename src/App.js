import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./routes/Main";
import Error from "./routes/Error";
import Faq from "./routes/Faq";
import Request from "./routes/Request";
import PrivateRoute from "./routes/PrivateRoute";

import "./scss/common.scss";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/qna" element={<Request />} />
                <Route path="/admin/*" element={<PrivateRoute />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default App;
