import React, { useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';

const App = () => {
  const [myNum, setmyNum] = useState(0);

  const inputOne = useRef();
  const inputTwo = useRef();

  const getNumBox = () => {
    console.log("Hello");
    console.log(inputOne.current);
    inputOne.current.style.width = "400px";
  };

  const getTextBox = () => {
    console.log("World");
    console.log(inputTwo.current);
  };

  return (
    <>
      <h2>useRef Hook</h2>
      <input
        ref={inputOne}
        value={myNum}
        type="number"
        style={{ width: "100px" }}
        onChange={(e) => setmyNum(e.target.value)}
      />
      <input
        ref={inputTwo}
        value={myNum}
        type="text"
        onChange={(e) => setmyNum(e.target.value)}
      />
      <h3>Value is : {myNum}</h3>
      <button onClick={() => getNumBox()}>Rupees</button>
      <button onClick={() => getTextBox()}>Dollars</button>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
