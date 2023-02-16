import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log("Component Mounted!");
  }, [count]);

  const updateCount = () => {
    setCount(count + 1);
  };

  const updateData = () => {
    setData(data + 1);
  };
  return (
    <div className="App">
      <div className="count">
        <h1>{count}</h1>
        <button onClick={updateCount}>Update Count</button>
      </div>
      <div className="data">
        <h1>{data}</h1>
        <button onClick={updateData}>Update Data</button>
      </div>
    </div>
  );
}
