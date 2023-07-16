import { useState } from "react"


const UseStateCounter = () => {
    // let count =0
    const [count,setCount] =useState(0)
    const handleInc = ()=>{
       setCount(count+1)
        console.log(count)
    }
  return (
    <div>
        <h2>USE STATE HOOK</h2>
        <h1>Count:{count}</h1>
        <button onClick={handleInc}>INC</button>
        <button>CLR</button>
        <button onClick={()=> setCount(count-1)}>DEC</button>
      
    </div>
  )
}

export default UseStateCounter
