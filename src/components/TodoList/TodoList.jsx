import './TodoList.css';

export const TodoList = ({ todos, onToggleTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li
          key={todo.id}
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
          onClick={() => onToggleTodo(todo.id)}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};
