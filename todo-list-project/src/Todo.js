import React, { useState } from 'react';
import './style.css';

const Todo = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);

    const generateId = () => {
        return Math.floor(Math.random() * 10) + 1;
    };

    const handleSubmit = () => {
        setTodos((prevTodos) => {
            return [
                ...prevTodos,
                {
                    text: input,
                    id: generateId(),
                },
            ];
        });
        setInput('');
    };

    const removeTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id));
    };

    return (
        <>
            <div className='container'>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='New todo'
                />
                <button onClick={handleSubmit}>Submit</button>
                <ul className='todo-list'>
                    {todos.map((todo) => (
                        <li key={todo.id} className='todo'>
                            <span>{todo.text}</span>
                            <button className='close' onClick={() => removeTodo(todo.id)}>
                                X
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Todo;
