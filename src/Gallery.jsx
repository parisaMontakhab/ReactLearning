import { Avatar } from "./avatar";
import { GetImgUrl } from "./utils";

export function Gallery() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Notable Scientists</h1>
      <section
        style={{
          border: "1px solid black",
          borderRadius: 10,
          width: 400,
          height: 300,
          marginTop: 5,
          padding: 5,
          marginLeft: 750,
        }}
      >
        <h2>Maria Skłodowska-Curie</h2>
        <Avatar
          person={{
            name: "Maria Skłodowska-Curie",
            imageId: "szV5sdG",
          }}
          width={100}
          height={100}
        />
        <ul>
          <li>
            <b>Profession: </b>
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
            Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (chemical element)
          </li>
        </ul>
      </section>

      <section
        style={{
          border: "1px solid black",
          borderRadius: 10,
          width: 400,
          height: 300,
          marginTop: 20,
          padding: 10,
          marginLeft: 750,
        }}
      >
        <h2>Katsuko Saruhashi</h2>
        <Avatar
          person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
          width={100}
          height={100}
        />
        <ul>
          <li>
            <b>Profession: </b>
            geochemist
          </li>
          <li>
            <b>Awards: 4 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}
