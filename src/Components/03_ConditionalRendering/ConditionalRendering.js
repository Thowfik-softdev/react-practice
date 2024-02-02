import React, { useState } from "react";

const ConditionalRendering = () => {
  // Conditional rendering with if else
  const [IsLoggedInIfElse, setIsLoggedInIfElse] = useState(false);
  const handleLoginIfElse = () => {
    setIsLoggedInIfElse(true);
  };
  const handleLogoutIfElse = () => {
    setIsLoggedInIfElse(false);
  };

  let content;
  if (IsLoggedInIfElse) {
    content = (
      <div>
        <p>Welcome User</p>
        <button onClick={handleLogoutIfElse}>Logout</button>
      </div>
    );
  } else {
    content = (
      <div>
        <p>Please Login</p>
        <button onClick={handleLoginIfElse}>Login</button>
      </div>
    );
  }

  // Conditional Rendering With Ternary operator
  const [isLoggedInTernary, setisLoggedInTernary] = useState();

  const handleLogin = () => {
    setisLoggedInTernary(true);
  };

  const handleLogout = () => {
    setisLoggedInTernary(false);
  };
  return (
    <div>
      ConditionalRendering
      <h3>Conditional Rending with If Else</h3>
      <div>{content}</div>
      <h3>Conditional Rending with Ternary</h3>
      <div>
        {isLoggedInTernary ? (
          <div>
            Welcome User ! <br />
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            Please Login <br />
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
      <h3>Conditional Rending with And and OR</h3>
      <div></div>
    </div>
  );
};

export default ConditionalRendering;
