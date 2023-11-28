import { useState } from "react"
import React  from 'react'

const Onchange = () => {
    const [name,setName] = useState();
    console.log(name);
  return (
    <div>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} />
    </div>
  )
}

export default Onchange