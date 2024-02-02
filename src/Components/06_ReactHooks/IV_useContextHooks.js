import React, { useRef } from "react";

const IV_useContextHooks = () => {
  const inputRef = useRef();

  const handleButtonClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      IV_useContextHooks <br />
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Focus the Input</button>
    </div>
  );
};

export default IV_useContextHooks;