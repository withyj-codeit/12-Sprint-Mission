import React, { useState } from 'react';
import { TodoInput } from '../components/TodoInput';
import { TodoFilters } from '../components/TodoFilters';
import { TodoList } from '../components/TodoList';
import { TodoTitle } from '../components/TodoTitle'
import { TodoLayout } from '../components/TodoLayout/TodoLayout'

export const TodoContainer = () => {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Study TypeScript', completed: true },
    { id: 3, text: 'Build a project', completed: false },
  ]);
  const [filter, setFilter] = useState('all');
  
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  }

  const handleAddTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setNewTodo('');
  };

  const handleToggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <TodoLayout>
      <TodoTitle title='Todo App' />
      <TodoInput value={newTodo} onChange={handleChange} onAddTodo={handleAddTodo} />
      <TodoFilters 
        currentFilter={filter}
        filters={[
          { label: 'All', value: 'all', onClick: () => handleFilterChange('all') },
          { label: 'Active ', value: 'active', onClick: () => handleFilterChange('active') },
          { label: 'Completed', value: 'completed', onClick: () => handleFilterChange('completed') }
          ]}
      />
      <TodoList todos={filteredTodos} onToggleTodo={handleToggleTodo} />
    </TodoLayout>
  );
};
