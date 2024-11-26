import './TodoFilters.css';

export const TodoFilters = ({ currentFilter, filters }) => {
  return (
    <div className="todo-filters">
      {filters.map(({ label, value, onClick }) => (
        <button
          className="filter-button"
          onClick={onClick}
          disabled={value === currentFilter}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
