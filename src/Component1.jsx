import React,{useState,useMemo} from 'react'
import Component2 from './Component2'
function Component1() {

    const [increment, setIncrement] = useState(0);
    
    console.log('component 1 was rendered for increment:',increment)
  return (
      <>
    <div>Component 1 has this value of increment right now: {increment}</div>
    <button onClick={()=>setIncrement(increment+1)}>Increment this</button>

    <Component2/>
    </>
  )
}
const C1= React.memo(Component1)
export default C1
// export default Component1