import React, { useState } from "react";
const intialState = 0;
export default function RedusUse() {
    const[count,setCount] = useState(intialState);
  return (
    <div>
      <div> count:{count}
      <br/>
        <button>+</button>
        <button>reset</button>
        <button>-</button>
      </div>
    </div>
  );
}
