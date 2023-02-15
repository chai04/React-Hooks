import React, { useState } from "react";

import "./styles.css";

// don't change the Component name "App"
export default function App() {
  const [counter, setCounter] = useState(0);

  const incrementHandler = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementHandler = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    } else {
      alert("Sorry, Zero limit reached");
    }
  };
  return (
    <>
      <div className="main_div">
        <div>
          <h1>{counter}</h1>
          <div className="btn_div">
            <button className="btn-inc" onClick={incrementHandler}>Increment</button>
            <button className="btn-dec" onClick={decrementHandler}>Decrement</button>
          </div>
        </div>
      </div>
    </>
  );
}
