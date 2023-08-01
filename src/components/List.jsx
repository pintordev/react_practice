import Item from "./Item";

function List({ todos }) {
  return (
    <>
      <div>To Do List</div>
      <ul>
        {todos.map((todos) => (
          <Item key={todos.id} todos={todos} />
        ))}
      </ul>
    </>
  );
}

export default List;
