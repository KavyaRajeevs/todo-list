import TodoItem from './TodoItem';

function TodoList({ todos, onDelete }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 bg-gray-50 rounded-lg">
        <p className="text-lg">📝</p>
        <p>No tasks yet. Add one above!</p>
      </div>
    );
  } else {
    return (
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <TodoItem 
            key={index}
            className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
            todo={todo} 
            onDelete={() => onDelete(index)} 
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;