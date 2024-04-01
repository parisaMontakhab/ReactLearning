// creat button without any handelevent//

// export function Tolbar(){
//     return(
//         <button>dont do anything</button>
//     )
// }

// Adding event handler--- outlin://

// export function Tolbar() {
//   function handelClick() {
//     alert("click me...");
//   }

//   return <button onClick={handelClick}>click me</button>;
// }

//----inlin://

// export function Tolbar(){
//     return(
//         <button onClick={()=>alert("clicked  me")}> click me </button>
//     )
// }

//Reading props in event handlers//

// export function AlertButton({ message, children }) {
//   return <button onClick={() => alert(message)}>{children}</button>;
// }

// export function Tolbar() {
//   return (
//     <div>
//       <AlertButton message="Playing">Play Movie</AlertButton>
//       <AlertButton message="Uploading">Upload Image</AlertButton>
//     </div>
//   );
// }

//Passing event handlers as props //

// export function Button({ onclick, children }) {
//   return <button onClick={onclick} style={{margin:20}}>{children}</button>;
// }

// export function PlayButton({movieName}) {
//   function handelPlayMovie() {
//     alert(`Playing ${movieName}!`);
//   }

//   return <Button onclick={handelPlayMovie}>Playing "{movieName}"</Button>;
// }

// export function UploadButton() {
//   function handelUploadImg() {
//     alert("uploading");
//   }

//   return <Button onclick={handelUploadImg}>Upload Image</Button>;
// }

// export function Tolbar() {
//   return (
//     <div>
//       <PlayButton movieName="Kiki's Delivery Service" />
//       <UploadButton />
//     </div>
//   );
// }

//Naming event handler props//

// export function Button({ onClick, children }) {
//   return (
//     <button onClick={onClick} style={{ margin: 10 }}>
//       {children}
//     </button>
//   );
// }

// export function Tolbar() {
//   return (
//     <div>
//       <Button onClick={() => alert("Playing")}> Play Movie</Button>
//       <Button onClick={() => alert("Uploading")}>Upload Image</Button>
//     </div>
//   );
// }

//event propagation//

// export function Tolbar() {
//   return (
//     <div
//       style={{
//         border: "1 px solid blsck",
//         width: 300,
//         height: 100,
//         borderRadius: 20,
//         backgroundColor: "gray",
//       }}
//       onClick={() => alert("you clicked on toolbar")}
//     >
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           alert("Playing");
//         }}
//         style={{ margin: 20 }}
//       >
//         Playing
//       </button>
//       <button
//         onClick={(e) => {
//           e.stopPropagation();
//           alert("Uploading");
//         }}
//         style={{ margin: 20 }}
//       >
//         Uploading
//       </button>
//     </div>
//   );
// }

//Preventing default behavior//

// export function Tolbar(){
//   return(
//     <form onSubmit={(e)=>{e.preventDefault();
//     alert("submiting")}}>
//       <input/>
//       <button>send</button>

//     </form>
//   )
// }

// challenge #1//
export function ColorSwitch({ onChangeColor }) {
  function onChangeColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;

    document.body.style.backgroundColor = randomColor;
  }

  return (
    <button
      style={{ margin: 20 }}
      onClick={(e) => {
        e.stopPropagation();
        onChangeColor();
      }}
    >
      Change color
    </button>
  );
}
