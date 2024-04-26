import { useEffect, useRef } from "react"


export default function RefCmpnnt() {
    const refValue=useRef();
    // useEffect(()=>{
    //     refValue.current.focus();
    //     refValue.current.value ="test value"
    // },[])

    function handelFocus(){
        refValue.current.focus();
        refValue.current.value ="write here"
        
    }

  return (
    <div>
        <input placeholder="search" ref={refValue}/>
        <button onClick={handelFocus}>Click to focus</button>
    </div>
  )
}
