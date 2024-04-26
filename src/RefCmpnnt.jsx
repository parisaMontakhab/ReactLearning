import { useEffect, useRef, useState } from "react"


export default function RefCmpnnt() {
  
const[isPlay,setIsPlay]= useState(false);
const refValue=useRef();

function handelClick(){
   setIsPlay(!isPlay);
   if(isPlay){
    refValue.current.pause();
   }else{
    refValue.current.play();
   }
}
return (
    <>
      <button onClick={handelClick}>
       {isPlay ? "Pause" : "play"}
      </button>
      <video
      ref={refValue}
        width="250"
       
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
          
        />
      </video>
    </>
  );
}


export function Timer(){
    return(
        <>
        <h1>Time passed:</h1>
        <button >
          Start
        </button>
        <button >
          Stop
        </button>
      </>

    )
}