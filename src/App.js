import React,{useState,useMemo} from 'react'
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';

function App() {
  const [increment, setIncrement] = useState(0);
  console.log('APP JS was rendered for increment:',increment)
  return (
    <div className="App">

    <section style={{background:"#ff1212"}}>
    <div>App js has this value of increment right now: {increment}</div>
    <button onClick={()=>setIncrement(increment+1)}>Increment this</button>
    </section>

      <Component1/>
   
    </div>
  );
}

export default App;
