export function TodoItem({ id, isCompleted, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        className="btn btn-danger"
        onClick={() => deleteTodo(id)}
      >
        Delete
      </button>
    </li>
  );
}
