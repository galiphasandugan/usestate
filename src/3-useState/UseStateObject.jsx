import { useState } from "react";
import UseStateCounter from "./UseStateCounter";

const UseStateObject = () => {
  // const [name, setName] = useState("Ahmet can")
  // const [age, setAge] = useState(30)
  // const [salary, setSalary ] = useState(50000)
  const [kisi, setKisi] = useState({
    name: "ahmet kan",
    age: 30,
    salary: 50000,
  });
 const [toggle,setToggle] = useState(true)


  const handleToggle = () => {
    setToggle(!toggle)
    console.log(toggle)
    if (toggle) {
      setKisi({
        name: "canan can",
        age: 40,
        salary: 60000,
      });
    } else {
      setKisi({
        name: "ahmet kan",
        age: 30,
        salary: 50000,
      });
    }
  };

  return (
    <div>
      <h1>UseStateObject</h1>
      <h2>NAME:{kisi.name}</h2>
      <h2>AGE:{kisi.age}</h2>
      <h2>Salary:{kisi.salary}</h2>

      <button onClick={() => setKisi({ ...kisi, name: "mehmet-kan" })}>
        Change Name
      </button>
      <button onClick={() => setKisi({ ...kisi, age: kisi.age + 1 })}>
        inc age
      </button>
      <button onClick={() => setKisi({ ...kisi, salary: kisi.salary + 10000 })}>
        inc salary
      </button>
      <button
        onClick={() =>
          setKisi({
            name: "canan can",
            age: 40,
            salary: 60000,
          })
        }
      >
        Full Change
      </button>
      <button onClick={handleToggle}>Toggle</button>
      {/* {toggle && <textarea name="" id="" cols="30" rows="10"></textarea>} */}
      {toggle && <UseStateCounter/>}
      
    </div>
  );
};

export default UseStateObject;
