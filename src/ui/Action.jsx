import Button from "./Button";

function Action() {
  function handleEdit() {}
  function handleDelete() {}

  return (
    <div>
      <Button onClick={handleEdit}>Edit</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
}

export default Action;
