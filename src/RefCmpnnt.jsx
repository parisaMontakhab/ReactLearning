import { useEffect, useRef } from "react"


export default function RefCmpnnt() {
    // const refValue=useRef();

    // useEffect(()=>{
    //     refValue.current.focus();
    //     refValue.current.value ="test value"
    // },[])

//     function handelFocus(){
//         refValue.current.focus();
//         refValue.current.value ="search here"
        
//     }

//   return (
//     <div>
//         <input  ref={refValue}/>
//         <button onClick={handelFocus}>Click to focus</button>
//     </div>
//   )
return (
    <>
      <button>
        play
      </button>
      <video
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
