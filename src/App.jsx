import React, { useState } from "react";
import Todo from "./components/Todo";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState(0);
  const [input2, setInput2] = useState(0);

  const [clicked, setClicked] = useState(false);

  const handleAddFromInput2 = () => {
    setClicked(false);
    setCounter(Number(input2));
  };

  return (
    <>
      <input
        type="number"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <div className="main-container">
        <div className="flex-container">
          <div
            className="red"
            onClick={() => setCounter(Number(counter) - Number(input))}
          ></div>
          <div
            className="green"
            onClick={() => setCounter(Number(counter) + Number(input))}
          ></div>
        </div>
        <div className="yellow" onClick={() => setCounter(0)}></div>
        <div className="blue" onClick={() => setClicked(true)}>
          {/* {!clicked} */}
          {counter}
        </div>
          {clicked && 
            <>
            <div className="model">

              <input
                type="number"
                onChange={(e) => setInput2(e.target.value)}
                value={input2}
                />
              <button onClick={handleAddFromInput2} className="btn">Add</button>
                </div>
            </>
          }
      </div>
    </>
  );
}
