function TodoItem({ todo, onDelete }) {
  return (
    <li className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
      <span className="text-gray-800">{todo}</span>
      <button 
        onClick={onDelete} 
        className="p-1 text-red-500 hover:bg-red-50 rounded transition-colors"
      >
        ×
      </button>
    </li>
  );
}

export default TodoItem;