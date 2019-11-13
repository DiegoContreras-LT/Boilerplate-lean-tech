import React from "react";
import "./App.css";

import PrincipalRouter from './pages/Router/principalRouter'

export default class App extends React.Component {
  render(){
    return (
      <div>
        <PrincipalRouter />
      </div>
    );
  }
}
