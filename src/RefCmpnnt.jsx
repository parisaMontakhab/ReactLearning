import { useEffect, useRef, useState,forwardRef} from "react"


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
    const[now,setNow]=useState(null);
    const[isStart,setIsStart]=useState(null);
    const intervalRef = useRef(null);

    function handleStart(){
   setNow(Date.now());
   setIsStart(Date.now());
   intervalRef.current= setInterval(()=>{
     setNow(Date.now())
   },100)
    }

    function handleStop(){
       clearInterval(intervalRef.current);
    }

    let seconedPassed=0;
    if(now !== null || isStart!== null){
        seconedPassed=(now-isStart) / 1000;
    }
    return(
        <>
        <h1>Time passed:{seconedPassed.toFixed(3)}</h1>
        <button onClick={handleStart} >
          Start
        </button>
        <button onClick={handleStop}>
          Stop
        </button>
      </>

    )
}

export function InputParent(){
 
  return(
   <div>
    <h1>For learning ForwardRef:</h1>
    <Input label="search filed"/>
   </div>
  )
}

const Input =  forwardRef(function Input({label},ref){
  return(
    <label >
      {label}:
      <input ref={ref}/>
      <button>Click to Focus</button>
    </label>
  )
})
