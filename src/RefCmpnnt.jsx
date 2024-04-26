import { useEffect, useRef } from "react"


export default function RefCmpnnt() {
    const refValue=useRef();
    useEffect(()=>{
        refValue.current.focus();
        refValue.current.value ="test value"
    },[])
  return (
    <div>
        <input placeholder="search" ref={refValue}/>
        <button>Click to focus</button>
    </div>
  )
}
