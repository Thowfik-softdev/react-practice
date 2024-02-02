import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { toast } from "react-toastify";

const GetApiProduct = () => {
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    productDisplay();
  }, []);

  const productDisplay = async () => {
    await axios("https://65b741b046324d531d54206e.mockapi.io/crud")
      .then((res) => {
        setProduct(res.data);
        // console.log(res);
        /* if (res === 200) {
          toast(`Products Displayed Successfully`, {
            type: "success",
            autoClose: 1500
          });
        } */
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" d-flex justify-content-center align-items-center flex-wrap gap-5">
      {Product.map((product, index) => (
        <Card key={index} style={{ width: "18rem" }}>
          {/* key index problem */}
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.price}</Card.Text>
            <Button variant="primary">Buy Now</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default GetApiProduct;
