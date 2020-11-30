import logo from './logo.svg';
import './App.css';
import React from 'react'
function App() {
 const [min,setMin]=React.useState(0);
 const [sec,setSec]=React.useState(0);
 const [flag,setFlag]=React.useState(false)
 let a=!flag?setInterval(() => {
   if(sec==60){
     setMin(min+1)
    setSec(0);
   }
   else{
  setSec(sec+1);}
 },1000 ):null;
  return (
    <div>
      <p>{min}:{sec}</p>
      <button onClick={()=>setFlag(true)}>Arrete</button>
    </div>
  );
}

export default App;
