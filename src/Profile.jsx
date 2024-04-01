import { Avatar } from "./avatar";

export function Profile({ person }) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: 25,
        width: 300,
        height: 200,
        padding: 5,
        marginTop: 20,
      }}
    >
      <Avatar person={person}/>
      <h1 person={person}>{person.name}</h1>
    </div>
  );
}
