import {useState} from "react"

const UseStateObject = () => {
    const [name, setName] = useState("Ahmet can")
    const [age, setAge] = useState(30)
    const [salary, setSalary ] = useState(50000)
  return (
    <div>
        <h1>UseStateObject</h1>
        <h2>NAME:{name}</h2>
        <h2>AGE:{age}</h2>
        <h2>Salary:{salary}</h2>

        <button onClick={()=>setName("mehmet can")}>Change Name</button>
        <button onClick={()=> setAge(age + 1)}>inc age</button>
        <button onClick={()=> setSalary(salary + 10000)}>inc salary</button>
     
        
    </div>
  )
}

export default UseStateObject
