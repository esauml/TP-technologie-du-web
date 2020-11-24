import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Cad from "./cad";
class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div className="App">
        <h1>Liste de cadeau pour le Père Noel</h1>
        <Cad cad={
        ["all i want for christmas is you","is you baby",""]
        }/>
      </div>
    );
  }
}

export default App;
