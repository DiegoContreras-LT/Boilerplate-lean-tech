import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Routes from './pages/Router';

function App() {
  return (
    <BrowserRouter>
      <div className={"root"}>
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
