import React, { useState } from "react";
const intialState = 0;
export default function RedusUse() {
  const [count, setCount] = useState(intialState);

  function handleInc() {
    setCount((c)=> c+1);
  }
  function handleRes() {
    setCount(intialState);
  }
  function handleDec() {
    setCount((c)=> c-1);
  }
  return (
    <div>
      <div>
        {" "}
        count:{count}
        <br />
        <button onClick={handleInc}>+</button>
        <button onClick={handleRes}>reset</button>
        <button onClick={handleDec}>-</button>
      </div>
    </div>
  );
}
