import React from "react";
import {BrowserRouter} from "react-router-dom";
import Routes from "./pages/Router";
import {ProviderTheme} from "./components/ThemeProvider";

const App = () => (
    <ProviderTheme>
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </ProviderTheme>
);

export default App;
