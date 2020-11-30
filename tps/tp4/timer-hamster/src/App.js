import "./App.css";
import React from "react";
import SevenSegmentDisplay from "./react-seven-segment-display";

function Minutos({ min, setMin }) {
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (min < 99) {
        setMin(min=>min+1);
      } else {
        setMin(0);
      }
    }, 60000);
    return () => clearInterval(interval);
  },[]);
  return min > 9 ? (
    <>
      <SevenSegmentDisplay value={min.toString(10).split("")[0]} />
      <SevenSegmentDisplay value={min.toString(10).split("")[1]} />
    </>
  ) : (
    <>
      <SevenSegmentDisplay value="0" />
      <SevenSegmentDisplay value={min} />
    </>
  );
}
function Segundos({ sec, setSec }) {
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (sec < 60) {
        setSec(1 + sec);
      } else {
        setSec(0);
      }
    }, 1000);
    return () => clearInterval(interval);
  });

  return sec > 9 ? (
    <>
      <SevenSegmentDisplay value={sec.toString(10).split("")[0]} />
      <SevenSegmentDisplay value={sec.toString(10).split("")[1]} />
    </>
  ) : (
    <>
      <SevenSegmentDisplay value="0" />
      <SevenSegmentDisplay value={sec} />
    </>
  );
}
function App() {
  const [min, setMin] = React.useState(0);
  const [sec, setSec] = React.useState(0);
  const [flag, setFlag] = React.useState(false);
  const [pausa, setPause]=React.useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setFlag(!flag);
    setMin(0);
    setSec(0);
  };
  return (
    <div>
      <Minutos min={min} setMin={setMin} />:
      <Segundos sec={sec} setSec={setSec} />
      <button onClick={handleClick}>reboot</button>
    </div>
  );
}

export default App;
