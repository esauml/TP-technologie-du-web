import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Cad from "./cad";
import imgNoel from './pere_noel_1.gif';

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <>
      <div className="App">
        <h1>Liste de cadeau pour le Père Noel</h1>
        <Cad cad={
          ["all i want for christmas is you","is you baby",""]
          }
        />

        <a href="https://santaclaus.com/"><button onClick>Aller vers santaclaus.com</button></a>
      </div>

      <img src={imgNoel}></img>
      </>
    );
  }
}

export default App;
