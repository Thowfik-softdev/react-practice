import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApiPut = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Avatar, setAvatar] = useState("");
  const Data = { name: Name, email: Email, phone: Phone, avatar: Avatar };

  const handlePutData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put("https://65150d07dc3282a6a3cdc75d.mockapi.io/crud/1", Data);

      // Update state based on response data
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
      setAvatar(res.data.avatar);

      if (res.status === 201) {
        toast(`Update Success`, { type: "success", autoClose: 1500 });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetData = async () => {
    try {
      const res = await axios.get("https://65150d07dc3282a6a3cdc75d.mockapi.io/crud/2");  
      // Update state based on response data
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
      setAvatar(res.data.avatar);
      console.log("Data : ", Data);

      // You can also display a toast or do something else if needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center p-5 ">
        <Form>
          <h3 className=" text-center p-3">Put API</h3>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="Name"
              placeholder="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="Email"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="Phone"
              placeholder="Phone"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="FormBasicAvatar">
            <Form.Label>Avatar</Form.Label>
            <Form.Control
              type="Avatar"
              placeholder="Avatar"
              value={Avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </Form.Group>
          <div className="d-flex justify-content-center align-items-center gap-2">
          <Button onClick={handlePutData} variant="primary" type="submit">
              Submit
            </Button>

            <Button onClick={handleGetData} variant="primary">
              Get Data
            </Button>
          </div>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ApiPut;
