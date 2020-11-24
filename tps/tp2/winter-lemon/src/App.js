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
          [  <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi1yd6nmpvtAhUtxIUKHb0RCZYQyCkwAHoECAkQAw&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DaAkMkVFwAoo&usg=AOvVaw3RfHgDtf8L3XjB71c8zwF2">all i want for christmas is you</a>,"is you baby","Mariah Carey"]
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
