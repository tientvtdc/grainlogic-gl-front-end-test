import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/pages/Home";

export default class RootRoute extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} index />
                </Routes>
            </BrowserRouter>
        );
    }
}
