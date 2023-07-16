const Event = () => {
let message= "EVENTS"

    const handleClick = (e)=>{
        alert("hi")
        console.log(e)
        console.log(e.target)

    }
    const handleChange =(e)=>{
        console.log(e.target)
        message= "STATE"
        console.log(message)
    }

  return <div>
    <h1>EVENTS</h1>
        <button onClick={handleClick}>Click</button>
        <button onClick={()=>alert("deneme")}>Click</button>
        <button onClick={handleChange}>Change</button>
       </div>;
};

export default Event;
