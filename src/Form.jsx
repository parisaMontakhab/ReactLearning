// import { useState } from "react";

// export function Form() {
//   let [firstName, setFirstName] = useState("");
//   let [lastName, setLastName] = useState("");

//   function handelFirstChange(e) {
//     setFirstName(e.target.value);
//   }
//   function handelLastChange(e) {
//     setLastName(e.target.value);
//   }
//   function handelReset() {
//     setFirstName("");
//     setLastName("");
//   }

//   return (
//     <form onSubmit={(e) => e.preventDefault}>
//       <input
//         onChange={handelFirstChange}
//         value={firstName}
//         placeholder="FirstName"
//       />
//       <input
//         onChange={handelLastChange}
//         value={lastName}
//         placeholder="LastName"
//       />
//       <h1>
//         Hi, {firstName} {lastName}
//       </h1>
//       <button onClick={handelReset}>Reset</button>
//     </form>
//   );
// }

// export function Messageform() {
//   let [message, setMessage] = useState("");
//   let [isSent, setIsSent] = useState(false);

//   if (isSent) {
//     return <hi>Thank You</hi>;
//   } else {
//     return (
//       <form
//         onSubmit={(e) => {
//           e.preventDefault;
//           alert(`Sending: "${message}"`);
//           setIsSent(true);
//         }}
//       >
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//         <button type="submit">send</button>
//       </form>
//     );
//   }
// }

// export function Great() {
//   function handelGreatClick() {
//     const name = prompt("what is your name?");
//     alert(`Hello, ${name}!`);
//   }

//   return <button onClick={handelGreatClick}>Great</button>;
// }

// testing Form//
import { useState } from "react";
import "./main.css";

export function Form() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");

  function handelFirstChange(e) {
    setFirstName(e.target.value);
  }

  function handelLastChange(e) {
    setLastName(e.target.value);
  }

  function handelReset() {
    setFirstName("");
    setLastName("");
  }

  return (
    <div className="div--form">
      <h1>
        Hello "{firstName} {lastName}"
      </h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          className="input"
          placeholder="First Name"
          value={firstName}
          onChange={handelFirstChange}
        />
        <input
          className="input"
          placeholder="Last Name"
          value={lastName}
          onChange={handelLastChange}
        />
        <button className="btn--reset" onClick={handelReset}>
          {" "}
          Reset
        </button>
      </form>
    </div>
  );
}

export function SubmitMessage() {
  let [isSent, setIsSent] = useState(false);
  let [message, setMessage] = useState("");

  if (isSent) {
    return <h1>Thank you</h1>;
  } else {
    return (
      <div>
        <textarea
          placeholder="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            alert(`"${message}" is sending`);
            setIsSent(true);
          }}
        >
          send
        </button>
      </div>
    );
  }
}

export function TraficLight() {
  let [walk, setWalk] = useState(true);
  function handelClick() {
    setWalk(!walk);
    alert(walk ? "stop in next" : "walk is next");
  }
  return (
    <div>
      <button onClick={handelClick}> change to {walk ? "stop" : "walk"}</button>
      <h1 style={{ color: walk ? "darkgreen" : "darkred" }}>
        {walk ? "walk" : "stop"}
      </h1>
    </div>
  );
}

export function PlusNumber() {
  let [number, setNumber] = useState(0);

  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          setNumber(number + 5);
          setNumber((n) => n + 1);
        }}
      >
        +3
      </button>
    </div>
  );
}

export function RequestTracker() {
  let [pending, setPending] = useState(0);
  let [completed, setCompleted] = useState(0);

  async function handelBuy() {
    setPending((n) => n + 1);
    await dely(3000);
    setPending((n) => n - 1);
    setCompleted((n) => n + 1);
  }

  function dely(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  return (
    <div>
      <h2>pending: {pending}</h2>
      <h2>completed: {completed}</h2>
      <button onClick={handelBuy}>buy</button>
    </div>
  );
}

export function UpdatePosition() {
  let [position, setPosition] = useState({ x: 0, y: 0 });
  return (
    <div
      onPointerMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
      style={{ position: "relative", width: "100vw", height: "100vh" }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: 10,
          top: 10,
          width: 20,
          height: 20,
        }}
      />
    </div>
  );
}

export function UpdateForm() {
  let [person, setPerson] = useState({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  });

  function handelNameChange(e) {
    setPerson({ ...person, name: e.target.value });
  }

  function handelTitleChanged(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        title: e.target.value,
      },
    });
  }

  function handelCityChanged(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        city: e.target.value,
      },
    });
  }

  function handelImageChanged(e) {
    setPerson({
      ...person,
      artwork: {
        ...person.artwork,
        image: e.target.value,
      },
    });
  }

  return (
    <>
      <lab>
        Name:
        <input value={person.name} onChange={handelNameChange} />
      </lab>
      <lab>
        Title:
        <input value={person.artwork.title} onChange={handelTitleChanged} />
      </lab>
      <lab>
        City:
        <input value={person.artwork.city} onChange={handelCityChanged} />
      </lab>
      <lab>
        Image:
        <input value={person.artwork.image} onChange={handelImageChanged} />
      </lab>
      <p>
        <i>{person.artwork.title}</i>
        {"by"}
        {person.name}
        <br />
        (located in : {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
}

export function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}

let nextId = 0;
export function AddingList() {
  let [name, setName] = useState("");
  let [addArtists, setAddArtists] = useState([]);

  return (
    <>
      <h1>Adding scluptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() =>
          setAddArtists([{ id: nextId++, name: name }, ...addArtists])
        }
      >
        {" "}
        Add
      </button>
      <ul>
        {addArtists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export function RemovingList() {
  let [artists, setArtists] = useState(initialArtists);
  return (
    <>
      <h1>Removing scluptors:</h1>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}
            {""}
            <button
              onClick={() =>
                setArtists(artists.filter((a) => a.id !== artist.id))
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

let initialShapes = [
  { id: 0, type: "circle", x: 50, y: 1200 },
  { id: 1, type: "square", x: 150, y: 1200 },
  { id: 2, type: "circle", x: 250, y: 1200 },
];

export function Transforshapes() {
  let [shapes, setShapes] = useState(initialShapes);

  function handelMoveClick() {
    const nextShape = shapes.map((shape) => {
      if (shape.type === "square") {
        return shape;
      } else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });

    setShapes(nextShape);
  }

  return (
    <>
      <button onClick={handelMoveClick}>Move circles down</button>
      {shapes.map((shape) => (
        <div
          key={shape.id}
          style={{
            background: "purple",
            position: "absolute",
            width: 20,
            height: 20,
            borderRadius: shape.type === "circle" ? "50%" : " ",
            left: shape.x,
            top: shape.y,
          }}
        />
      ))}
    </>
  );
}

let initialCounters = [0, 0, 0];

export function CounterList() {
  let [counters, setCounters] = useState(initialCounters);

  function handelCounterClick(index) {
    const nextCounter = counters.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else {
        return c;
      }
    });

    setCounters(nextCounter);
  }

  return (
    <>
      <ul>
        {counters.map((counter, i) => (
          <li key={i}>
            {counter}
            <button onClick={() => handelCounterClick(i)}>+1</button>
          </li>
        ))}
      </ul>
    </>
  );
}

let initialList = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];
let nexId = 3;
export function IsertList() {
 
  let [name, setName] = useState("");
  let [artists, setArtists] = useState(initialList);

  function handelInsert() {
    const indexArt= 1;
    const newLists = [
      ...artists.slice(0,indexArt),
      {id:nexId++, name:name},
      ...artists.slice(indexArt)
    ];

    setArtists(newLists);
    setName("");
  }

  return (
    <>
      <h1>Isert List:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handelInsert}>Insert</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}

const reversList= [ 
  { id: 0, title: 'Big Bellies' },
  { id: 1, title: 'Lunar Landscape' },
  { id: 2, title: 'Terracotta Army' },
]
export function ReversList(){
  let[list,setList] = useState(reversList);

  function handelRiverse (){
   const reverser = [...list];
   reverser.reverse();
   setList(reverser)
  }
return(
  <>
  <button onClick={handelRiverse}>Reverse</button>
  <ul>
    {list.map((l)=>
    <li key={l.id}>{l.title}</li>)}
  </ul>
  </>
)
}

export function InputForm(){
  return(
    <>
    <h2>City quiz</h2>
    <p>In which city is there a billboard that turns air into drinkable water?</p>
    <form>
      <textarea/>
      <br/>
      <button>submit</button>
    </form>
    </>
  )
}