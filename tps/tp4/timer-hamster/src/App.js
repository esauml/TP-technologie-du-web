
import './App.css';
import React from 'react'

function Minutos(){

}
function Segundos({sec,setSec}){
let a=setInterval(()=>{
 if(sec<60){
   setSec(parseInt(sec)+1)
 }
 else{
   setSec(0)
 }
},1000)
return (<p>{sec}</p> );
}
function App() {
 const [min,setMin]=React.useState(0);
 const [sec,setSec]=React.useState(0);
 const [flag,setFlag]=React.useState(false)
/*  let a=!flag?setInterval(() => {
   if(sec===59){
     setMin(min+1)
    setSec(0);
   }
   else{
  setSec(sec+1);}
 },1000 ):null; */
const handleClick=e=>{
  e.preventDefault()
  setFlag(!flag);
  setMin(0);
  setSec(0);
}
  return (
    <div>
      <Segundos sec={parseInt(sec)} setSec={setSec}/>
      <button onClick={handleClick}>Arrete</button>
    </div>
  );
}

export default App;
