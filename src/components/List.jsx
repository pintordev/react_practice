import Item from "./Item";

function List({ todos, onDelete, onToggle }) {
  return (
    <>
      <div>To Do List</div>
      <ul>
        {todos.map((todos) => (
          <Item
            key={todos.id}
            todos={todos}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </>
  );
}

export default List;
