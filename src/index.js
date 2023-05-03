import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOMClient.createRoot(document.getElementById("root"))

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

reportWebVitals();
