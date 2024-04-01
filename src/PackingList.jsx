export function Item({ name, IsPacked }) {
  let itemContent = name;
  if (IsPacked) {
    itemContent = name + "@";
  }
  return <li>{itemContent}</li>;
}

export function PackingList() {
  return (
    <section>
      <h1>List Of Name</h1>
      <ul>
        <Item IsPacked={true} name="Parisa" />
        <Item IsPacked={true} name="Monti" />
        <Item IsPacked={false} name="Sani" />
      </ul>
    </section>
  );
}
