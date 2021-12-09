function ModelCard({ name, path }) {
  return (
    <div className={"bg-red-500 rounded shadow mt-10 h-40 w-40"}>
      <div>{name}</div>
      <div>{path}</div>
    </div>
  );
}

export default ModelCard;
