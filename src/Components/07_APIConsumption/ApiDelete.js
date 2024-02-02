import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function BasicExample() {
  const [ID, setID] = useState();
  console.log(ID);


  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .delete(`https://65150d07dc3282a6a3cdc75d.mockapi.io/crud/${ID}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast(`Deleted Successfully`, { type: "success", autoClose: 1500 });
        }
      })
      .catch((e) => {
        // handle error
        console.log(e);
      });
  };

  return (
    <div className="w-100 h-100">
      <div className="d-flex justify-content-center align-items-center p-5 ">
        <Form onSubmit={handleSubmit}>
          <h3 className=" text-center p-3">Delete API</h3>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>ID</Form.Label>
            <Form.Control
              type="ID"
              placeholder="ID"
              onChange={(e) => setID(e.target.value)}
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
}

export default BasicExample;
