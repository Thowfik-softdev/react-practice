import React, { useState } from "react";
import Child from "./child";

const Parents = () => {
  const [Data, setData] = useState("Initial Data");

const handleStateChange = () => {
    setData("Updated State")
}

  return (
    <div>
      Parents Component{" "}
      <div>
        <button onClick={handleStateChange}>Change State</button>
      </div>
      <br />
      <Child Data={Data}/>
    </div>
  );
};

export default Parents;
