import { people } from "./Data";
import { GetImgUrl } from "./utils";

export function List() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const everyOnElse = people.filter(
    (person) => person.profession !== "chemist"
  );

  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
      <ul>
        {chemists.map((person) => (
          <li key={person.id}>
            <img src={GetImgUrl(person)} alt={person.name} style={{borderRadius:50}} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>

      <h2>EveryOne Else</h2>
      <ul>
        {everyOnElse.map((person)=>
        <li key={person.id}>
           <img src={GetImgUrl(person)} alt={person.name} style={{borderRadius:50}} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>

        </li>)}
      </ul>

    </article>
  );
}

