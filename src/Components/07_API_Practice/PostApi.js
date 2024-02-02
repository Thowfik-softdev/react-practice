import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PostApi = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [Avatar, setAvatar] = useState("");

  const Data = { name: Name, email: Email, phone: Phone, avatar: Avatar };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("https://65150d07dc3282a6a3cdc75d.mockapi.io/crud", Data)
      .then((res) => {
        // console.log(res);
        if (res.status === 201) {
          toast("Submitted Successfully", { type: "success", autoClose: 1500 });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-100 h-100">
      <div className=" d-flex justify-content-center align-items-center p-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="Name"
              placeholder="Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="Email"
              placeholder="Email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="Phone"
              placeholder="Phone"
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Avatar</Form.Label>
            <Form.Control
              type="Avatar"
              placeholder="Avatar"
              onChange={(event) => {
                setAvatar(event.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PostApi;
