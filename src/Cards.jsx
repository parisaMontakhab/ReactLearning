import { useState } from "react";
import { sculptureList } from "./Data";

export function Cards() {
  let [index, setIndex] = useState(0);
  let [showMore, setShowMore] = useState(false);
  function handelClick() {
    setIndex(index + 1);
  }
  function handelMoreClick() {
    setShowMore(!showMore);
  }
  let sculpture = sculptureList[index];

  return (
    <div>
      <button onClick={handelClick}>Next</button>
      <h1>
        <i>{sculpture.name}</i>
        by{sculpture.artist}
      </h1>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handelMoreClick}>
        {showMore ? "hide" : "show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </div>
  );
}
