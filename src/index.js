import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOMClient.createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter basename="/kakaoService">
        <App />
    </BrowserRouter>
);

reportWebVitals();
