import { GetImgUrl } from "./utils";

export function Avatar({ person, size }) {
  return (
    <img
      src={GetImgUrl(person, "s")}
      alt={person.name}
      width={size}
      height={size}
      style={{borderRadius:50}}
    />
  );
}
