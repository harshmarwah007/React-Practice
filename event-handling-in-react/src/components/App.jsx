import React, { useState } from "react";

function App() {


  const [name,setName] = useState();
  const [heading,setHeading] = useState("Hello");
  const [colorButton,setColorButton] = useState("white");
  const handleSubmit = ()=>{
    name === undefined ? setHeading("Hello") : setHeading("Hell "+name);
  }


  return (
    <div className="container">
      <h1>{heading} {}</h1>
      <input type="text" 
      placeholder="What's your name?" 
      value ={name}
      onChange={(event)=> setName(event.target.value)}
      />
      <button onClick={handleSubmit}
      onMouseOver = {()=> setColorButton("black")}
      style = {{backgroundColor: colorButton}}
      onMouseOut ={ ()=> setColorButton("white")}
      
      >Submit</button>
    </div>
  );
}

export default App;
