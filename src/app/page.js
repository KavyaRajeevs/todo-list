    'use client';
    import TodoList from './components/TodoList';
    import TodoForm from './components/TodoForm';
    import Footer from './components/Footer';
    import { useState } from 'react';
    function Home() {
      const [todos, setTodos] = useState([]);

      const handleAddTodo = (text) => {
        setTodos([...todos, text]);
      };

      const handleDeleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      };

      return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Todo App</h1>
        <TodoForm onAdd={handleAddTodo} />
        <TodoList todos={todos} onDelete={handleDeleteTodo} />
      </div>
      <Footer />
    </div>
  );
    }

    export default Home;