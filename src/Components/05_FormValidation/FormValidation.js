import React, { useState } from "react";

const FormValidation = () => {
  // Normal Form Validation
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Name : " + name + "Email : " + email);
  };

  // Form Validation with some condition
  const [uName, setUName] = useState("");
  const [uEmail, setUEmail] = useState("");
  const [errors, setErrors] = useState({ uName: "", uEmail: "" });

  const handleSubmitCon = (event) => {
    event.preventDefault();

    let isValid = true;
    let errors = { uName: "", uEmail: "" };

    if (uName === "") {
      isValid = false;
      errors.uName = "Name is Required";
    }
    if (uEmail === "") {
      isValid = false;
      errors.uEmail = "Email is Required";
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(uEmail)) {
      isValid = false;
      errors.uEmail = "Email is not Valid";
    }

    setErrors(errors);
    if (isValid) {
      alert("Name: " + uName + " " + "Email: " + uEmail);
    }
  };

  return (
    <div>
      FormValidation
      <h3>Normal Form Validation</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h3>Form Validation with some Conditions</h3>
      <form onSubmit={handleSubmitCon}>
        <label>
          Name:
          <input
            type="text"
            value={uName}
            onChange={(event) => {
              setUName(event.target.value);
            }}
          />
          {errors.uName && <div>{errors.uName}</div>}
        </label>
        <label>
          Email:
          <input
            type="text"
            value={uEmail}
            onChange={(event) => {
              setUEmail(event.target.value);
            }}
          />
          {errors.uEmail && <div>{errors.uEmail}</div>}
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormValidation;
