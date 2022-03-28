import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [st1, setSt1] = useState("");
  const [st2, setSt2] = useState("");
  const handleInput = (event) => {
    // use console.log
    setSt1(event.target.value);
    setSt2(event.target.value);
    console.log(`#text-input is ${st1}`);
    console.log(`#num-input is ${st2}`);
  };

  // do not change id of input elements
  return (
    <div id="main">
      <label htmlFor="text-input">Text Input:- </label>
      <input id="text-input" type="text" onChange={handleInput} value={st1} />

      <br />
      <br />

      <label htmlFor="num-input">Number input</label>
      <input id="num-input" type="number" onChange={handleInput} value={st2} />
      <br />
    </div>
  );
};

export default App;
