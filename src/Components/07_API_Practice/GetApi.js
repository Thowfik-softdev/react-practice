import axios from 'axios';
import React, {useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';


const GetApi = () => {

    const [Post, setPost] = useState([]);
    // console.log(Post);

    useEffect(()=>{
        getApi();
    },[]);

    const getApi = async () => {
        await axios.get("https://65150d07dc3282a6a3cdc75d.mockapi.io/crud")
        .then((res)=>{
            setPost(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    };

    // console.log(setPost);

  return (
    <div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Profile</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {Post.map((post, index)=>(
            <tr>
            <td>{index + 1}</td>
            <td>
                <img src={post.avatar} width={50} className=" rounded-1" alt="" />
            </td>
            <td>{post.name}</td>
            <td>{post.email}</td>
            <td>{post.phone}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  )
}

export default GetApi