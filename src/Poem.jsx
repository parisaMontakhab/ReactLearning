
import { poem } from "./Data";

export function Poem() {
  return (
    <article>
      {poem.lines.map((line, i) => (
        <div key={i}>
          {i > 0 && <hr />}
          <p>{line}</p>
        </div>
      ))}
    </article>
  );
}
