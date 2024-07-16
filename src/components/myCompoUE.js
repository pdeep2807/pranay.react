import React, { useState, useEffect } from "react";
function Mycomp() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  useEffect(() => console.log("cliccked"));

  function addCount() {
    setCount(count + 1);
  }

  function subCount() {
    setCount(count - 1);
  }

  function colorChange() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <div>
      <p style={{ color: color }}>Count:{count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Sub</button>
      <button onClick={colorChange}>colorChange</button>
    </div>
  );
}
export default Mycomp;
