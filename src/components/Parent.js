import Child from "./Child";
import React, { useState } from "react";
function Parent() {
  const [word, setword] = useState("Parent");
  const changeWord = (data) => {
    //pranay
    setword(data); //pranay
  };

  return (
    <div>
      <h1>bi-directional props</h1>
      <h1>{word}</h1>
      <Child changeWord1={changeWord} />
    </div>
  );
}

export default Parent;
