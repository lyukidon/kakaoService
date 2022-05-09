import React from "react";
import { Routes, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import Main from "./routes/Main";
import Error from "./routes/Error";
import Faq from "./routes/Faq";
import Request from "./routes/Request";
import PrivateRoute from "./routes/PrivateRoute";

import "./scss/common.scss";

library.add(fas)

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
