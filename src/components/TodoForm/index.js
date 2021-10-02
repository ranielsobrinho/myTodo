import React, {useState} from 'react';
import api from '../../services/Api';
import './index.css';

export default function TodoForm() {
    const [todo, setTodo] = useState('');

    const handleTodo = e => {
        setTodo(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setTodo('');
        
        const userId = sessionStorage.getItem('userId');
        api.post(`/users/${userId}/todos`, {
            content: todo
        })
        .then(() => {
            alert('Deu certo');
        }).catch((err) => alert(err));
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Add new todo"
                value={todo}
                name='todo'
                onChange={handleTodo}
                />

                <button>Add</button>
            </form>
        </div>
    )
}