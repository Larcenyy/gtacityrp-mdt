import './dist/assets/Main.css';
import './dist/assets/modal.css';
import './dist/assets/notifbell.css';
import './dist/assets/loading.css';
import './dist/assets/mdt_dispatch.css';
import './dist/assets/fiche_citizen.css';
import './dist/assets/page-rapport.css';

import {Routes, Route} from "react-router-dom";

import TabletteHome from "./components/view/auth/home/tablette-home";
import TabletteReset from "./components/view/auth/reset/tablette-reset";
import TabletteCodeReset from "./components/view/auth/reset/code/tablette-reset-code";
import TablettePasswordReset from "./components/view/auth/reset/password/tablette-reset-password";
import TabletLayout from "./components/view/lapd_dac/lapd-layout";
import React from "react";
import TabletteLoad from "./components/view/auth/loading/tablette-load";

function App() {
    return (

        <div className="App">
            <Routes>
                <Route path="/" element={<TabletteHome />} />
                <Route path="/reset" element={<TabletteReset />} />
                <Route path="/resetcode" element={<TabletteCodeReset />} />
                <Route path="/resetpassword" element={<TablettePasswordReset />} />
                <Route path="/connect" element={<TabletteLoad />} />

                <Route path="/page/:page" element={<TabletLayout />} />
            </Routes>
        </div>
    );
}

export default App;