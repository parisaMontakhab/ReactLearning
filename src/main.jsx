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
import { Timer,InputParent } from "./RefCmpnnt";
import RedusUse from "./RedusUse";

export default function App() {
  return (
    <div>
<RedusUse/>
      
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
