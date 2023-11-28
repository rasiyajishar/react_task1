import React, { useState } from 'react'

function Counterapp() {
const [count,setCount] = useState(0);
  function increment(){
    setCount(count + 9)
  } 
  function decrement(){
    if(count > 0)
    setCount(count - 9)
  } 
  return (
    <div>
        <h1> {count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counterapp