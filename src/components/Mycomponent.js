import React, { useState } from "react";
function MyComponent() {
  const [name, setName] = useState();
  const [Age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);
  const updateName = () => {
    const name1 = "pranay";
    setName(name1);
  };

  const incrementAge = () => {
    setAge(Age + 1);
  };

  const toggleEmployeeStatus = () => {
    setIsEmployed(!isEmployed);
  };
  return (
    <div>
      <p>Name:{name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age:{Age}</p>
      <button onClick={incrementAge}>Increment</button>

      <p>Student:{isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleEmployeeStatus}>isEmployee</button>
    </div>
  );
}
export default MyComponent;
