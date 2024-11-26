import './TodoPage.css';
import { useState } from 'react';

function TodoPage() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Study TypeScript', completed: true },
    { id: 3, text: 'Build a project', completed: false },
  ]);
  const [filter, setFilter] = useState('all');
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <h1 className="todo-title">Todo App</h1>
      <div className="todo-input-container">
        <input
          className="todo-input"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="add-button" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <div className="todo-filters">
        <button
          className="filter-button"
          onClick={() => setFilter('all')}
          disabled={filter === 'all'}
        >
          All
        </button>
        <button
          className="filter-button"
          onClick={() => setFilter('active')}
          disabled={filter === 'active'}
        >
          Active
        </button>
        <button
          className="filter-button"
          onClick={() => setFilter('completed')}
          disabled={filter === 'completed'}
        >
          Completed
        </button>
      </div>
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <li
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoPage;
