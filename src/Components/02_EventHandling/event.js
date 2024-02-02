import React,{useState} from "react";

const Event = () => {
const [Name, setName] = useState("");

const handleClickEvent = () => {
    alert("Hello Thowfik");
}
const handleNameChange = (event) =>{
    setName(event.target.value)
}


  return (
    <div>
      <h3>Event Handling</h3>
      <button onClick={handleClickEvent}>Click Me</button><br />
      <input onChange={handleNameChange} type="text" name="Name" id="Name" />
      <p>{Name}</p>
    </div>
  );
};

export default Event;
