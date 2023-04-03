import React, { useMemo, useState } from "react";

function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(100);

  useMemo(() => {
    console.warn("UseMemo");
  }, []);

  function updateCount() {
    setCount(count + 1);
  }

  function updatePrice() {
    setPrice(price * 10);
  }
  return (
    <div>
      <h2>Counter: {count}</h2>
      <h2>Price: {price}</h2>
      <button onClick={() => updateCount()}>Update Counter</button>
      <button onClick={() => updatePrice()}>Update Price</button>
    </div>
  );
}

export default UseMemoHook;
