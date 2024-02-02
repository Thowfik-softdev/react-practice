import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ApiGet = () => {
  const [Profiles, setProfiles] = useState([]);

  console.log("PostData: ", Profiles);

  useEffect(() => {
    getProfiles();
  }, []);

  const getProfiles = async () => {
    try {
      const response = await fetch("https://65bbbcdb52189914b5bcfb50.mockapi.io/Employee", {
        method: 'GET',
        headers: {'content-type': 'application/json'}
      });

      if (response.ok) {
        const data = await response.json();
        setProfiles(data);
      } else {
        // handle error
        console.log("Error fetching data. Status:", response.status);
      }
    } catch (error) {
      // handle error
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      {/* Assuming Profiles is an array of objects, you might want to map through it */}
      {Profiles.map((profile) => (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={profile.avatar} />
        <Card.Body>
          <Card.Title>{profile.name}</Card.Title>
          <Card.Text>
            {profile.phone}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  
      ))}
    </div>
  );
};

export default ApiGet;
