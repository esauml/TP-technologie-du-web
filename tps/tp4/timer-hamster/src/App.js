import React, { useState, useRef } from "react";
import styled from "styled-components";
import "./styles.css";
import SevenSegmentDisplay from "./react-seven-segment-display";

const ButtonStyled = styled.button`
  background: "palevioletred";
  color: "white";
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [flag, setFlag] = useState(true);
  const interval = useRef(null);

  function onTimer() {
    interval.current = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  }

  function offTimer() {
    clearInterval(interval.current);
  }

  function bound() {
    if (flag) {
      onTimer();
    } else {
      offTimer();
    }
    setFlag((flag) => !flag);
  }

  const formatTime = () => {
    let timeString;

    //[hard validation] superior limit validation
    if (seconds === 99 * 60 + 59) setSeconds((seconds) => 0);

    timeString = `${Math.floor(seconds / 60)} : ${seconds % 60}`;

    return timeString;
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>{formatTime()}</p>
        <ButtonStyled onClick={() => bound()}>Start/Stop</ButtonStyled>
      </header>
    </div>
  );
}
