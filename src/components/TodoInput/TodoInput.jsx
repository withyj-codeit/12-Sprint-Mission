import './TodoInput.css';

export const TodoInput = ({ value, onChange, onAddTodo }) => {

  return (
    <div className="todo-input-container">
      <input
        className="todo-input"
        value={value}
        onChange={onChange}
        placeholder="Add a new task"
      />
      <button className="add-button" onClick={onAddTodo}>
        Add
      </button>
    </div>
  );
};
