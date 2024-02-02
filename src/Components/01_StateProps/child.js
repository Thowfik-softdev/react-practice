import React from "react";

const child = (props) => {
  const { Data } = props;
  return (
    <div>
      child Component{" "}
      <div>
        <p>{Data}</p>
      </div>
    </div>
  );
};

export default child;
