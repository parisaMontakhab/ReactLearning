import { useState } from "react";
import { sculptureList } from "./Data";
import "./main.css";

export function Product() {
  let [index, setIndex] = useState(0);
  let[showMore,setShowMore] = useState(false);

  let hasNex = index < sculptureList.length -1 ;
  let hasPrev = index > 0;

  function handelNextClick() {
    if(hasNex){
      setIndex(index + 1);
    }
  
  }

  function handelShowClick(){
   setShowMore(!showMore);
  }

  function handelPrevClick(){
    if(hasPrev){
      setIndex(index - 1);
    }

  }

  let sculpture = sculptureList[index];


  return (
    <div className="card">
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h4>({index+1} of {sculptureList.length})</h4>
      <img className="image"
      src={sculpture.url}
      alt={sculpture.alt}/>
      <button onClick={handelShowClick} className="show-button">{showMore ? "hide" : "show"} details</button>
      <h3>{showMore && <p>{sculpture.description}</p>}</h3>
      <button onClick={handelNextClick} className="next--button">
        Next
      </button>
      <button className="prev--button" onClick={handelPrevClick}>
        Previous
      </button>
    </div>
  );
}
