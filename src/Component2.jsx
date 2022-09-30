import React,{useState,useMemo} from 'react'

function Component2(){

    const [increment, setIncrement] = useState(0);
    console.log('component 2 was rendered for increment:',increment)
  return (
      < section style={{background:"#2496f7"}}>
    <div>Component 2 has this value of increment right now: {increment}</div>
    <button onClick={()=>setIncrement(increment+1)}>Increment this</button>
    </section>
  )
}

const C2= React.memo(Component2)
// export default C2
export default Component2