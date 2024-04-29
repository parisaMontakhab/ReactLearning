import React, { useReducer, useState } from "react";


function reducer(state,action){

}


const intialState = 0;
export default function RedusUse() {
  //const [count, setCount] = useState(intialState);
  const[count,dispatch] = useReducer(reducer,intialState);

  function handleInc() {
   // setCount((c)=> c+1);
   dispatch({ type: 'Inc' })
  }
  function handleRes() {
    dispatch({ type: 'Res' })
    //setCount(intialState);
  }
  function handleDec() {
    dispatch({ type: 'Dec' })
   // setCount((c)=> c-1);
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
