import React from "react";
import PrincipalRouter from "./pages/Router/principalRouter";
import "./App.css";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <PrincipalRouter/>
            </div>
        );
    }
}

