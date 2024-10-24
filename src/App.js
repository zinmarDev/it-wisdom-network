import React from "react";
import {Route, Router, Routes} from "react-router";
import Home from "./pages/Home";
import {BrowserRouter} from "react-router-dom";
import Layout from "./layouts/Layout";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path={"/"} index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
