import { useEffect, useRef } from "react"


export default function RefCmpnnt() {
    const refValue=useRef();
    useEffect(()=>{
        refValue.current.focus();
    },[])
  return (
    <div>
        <input placeholder="search" ref={refValue}/>
    </div>
  )
}
