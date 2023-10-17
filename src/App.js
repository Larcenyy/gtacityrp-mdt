import './dist/assets/scss/app.css';
import {Routes, Route} from "react-router-dom";

import TabletteHome from "./components/view/auth/home/tablette-home";
import TabletteReset from "./components/view/auth/reset/tablette-reset";
import TabletteCodeReset from "./components/view/auth/reset/code/tablette-reset-code";
import TablettePasswordReset from "./components/view/auth/reset/password/tablette-reset-password";
import TabletLayout from "./components/view/lapd_dac/lapd-layout";
import React from "react";
import TabletteLoad from "./components/view/auth/loading/tablette-load";


function App() {
    const getUrl = window.location.href;
    const isLafd = getUrl.includes("lafd");

    return (
        <div className="App" data-theme={isLafd ? "lafd" : "lapd"}>
            <Routes>
                <Route path="/" element={<TabletteHome />} />
                <Route path="/reset" element={<TabletteReset />} />
                <Route path="/resetcode" element={<TabletteCodeReset />} />
                <Route path="/resetpassword" element={<TablettePasswordReset />} />
                <Route path="/connect" element={<TabletteLoad />} />
                <Route path="/lapd/page/:page" element={<TabletLayout />} />
                <Route path="/lafd/page/:page" element={<TabletLayout />} />
            </Routes>
        </div>
    );
}

export default App;