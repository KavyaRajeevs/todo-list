import { useState } from 'react';

function TodoForm({ onAdd }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() !== '') {
            onAdd(text);
            setText('');
        }
    };

    return (
  <form onSubmit={handleSubmit} className="flex gap-2 mb-6 p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Add a new task..."
      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
    <button 
      type="submit" 
      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
    >
      Add
    </button>
  </form>
);
}

export default TodoForm;