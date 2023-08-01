function Item({ todos, onDelete, onToggle }) {
  return (
    <div style={{ textDecoration: todos.checked ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={todos.checked}
        onChange={() => onToggle(todos.id)}
      />
      <span>
        {todos.id}. {todos.text}
      </span>
      <button onClick={() => onDelete(todos.id)}>delete</button>
    </div>
  );
}

export default Item;
