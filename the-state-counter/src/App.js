import React,{useState} from 'react';
import "./App.css"
function App()
{
  
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
      <header>
        <h1> Counter app using states</h1>
      </header>
      <h2>Curent Value of Counter is : {count} </h2>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => (count >= 10 ? "": setCount(count + 1) )}>Increase</button>
      <button onClick={() => (count <= 0 ? "":setCount(count - 1 ))}>Decrease</button>
      
    
    </div>
)

}

export default App;