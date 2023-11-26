import React, { useEffect, useState } from 'react'

const Effects = () => {
const [Counter,setCounter]=useState(0)
useEffect(()=>{
    console.log("Side Effects")
},[Counter])
  return (
    <div>
      <h1>{Counter}</h1>
      <button onClick={()=>setCounter(Counter+1)} >+</button>
      
    </div>
  )
}

export default Effects
