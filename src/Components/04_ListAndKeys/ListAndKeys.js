import React, { useState } from "react";

const ListAndKeys = () => {
  // Basic List Rendering
  const cars = ["BMW", "Ford", "Audi", "Lamborghini", "Mc_Laren"];

  // Dynamic List with keys
  const [bikes, setBikes] = useState(["Yamaha", "Bmw", "Honda", "Ktm", "Hero"]);
  const [newBikes, setNewBikes] = useState("");

  const handleNewBike = () => {
    setBikes([...bikes, newBikes]);
    setNewBikes("");
  };

  return (
    <div>
      ListAndKeys
      <h3>Basic List Rendering</h3>
      <ul>
        {cars.map((car) => (
          <li key={car}>{car}</li>
        ))}
      </ul>
      <h3>Dynamic List with keys</h3>
      <ul>
        {bikes.map((bike, index) => (
          <li key={index}>{bike}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newBikes}
        onChange={(e) => setNewBikes(e.target.value)}
      />
      <button onClick={handleNewBike}>Add Bike</button>
    </div>
  );
};

export default ListAndKeys;
