import React from "react";
import {BrowserRouter} from "react-router-dom";
import Routes from "./pages/Router";
import {ThemeToggleProvider} from "./components/ThemeToggle";

const App = () => (
    <ThemeToggleProvider>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </ThemeToggleProvider>
);

export default App;
