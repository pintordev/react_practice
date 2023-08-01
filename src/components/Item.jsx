function Item({ todos, onDelete, onToggle }) {
  return (
    <div>
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
