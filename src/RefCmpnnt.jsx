import { useRef } from "react"


export default function RefCmpnnt() {
    const refValue=useRef();
    
  return (
    <div>
        <input placeholder="search" ref={refValue}/>
    </div>
  )
}
