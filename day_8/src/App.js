import React, { useState } from 'react'

const App = () => {
  const[count,setCount] = useState(0);
  const decrement = () => {
    setCount(count-1);
    console.log(count);
  }
  const increment = () => {
    setCount(count+1);
    console.log(count);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ backgroundColor: "black", color: "white" }}>Counter APP</h1>
      <div>{count}</div>
      <button onClick={decrement}>-</button>
      <button onClick={()=>setCount(0)}>RESET</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default App