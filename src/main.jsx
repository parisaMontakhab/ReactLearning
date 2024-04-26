import React from "react";
import ReactDOM from "react-dom/client";
import {
  SubmitMessage,
  PlusNumber,
  RequestTracker,
  UpdateForm,
  Scoreboard,
  AddingList,
  RemovingList,
  Transforshapes,
  CounterList,
  IsertList,ReversList, InputForm
} from "./Form";
import RefCmpnnt from "./RefCmpnnt";

export default function App() {
  return (
    <div>
<RefCmpnnt/>
      
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
