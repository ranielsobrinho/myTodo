import React, {useState} from 'react';
import api from '../../services/Api';

export default function TodoForm() {
    const [todo, setTodo] = useState('');

    const handleTodo = e => {
        setTodo(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setTodo('');

        // TODO salvar o id do usuário e passá-lo aqui
        api.post('/users/6/todos', todo)
        .then((response) => {
            console.log(response.data);
        }).catch((err) => console.log(err));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                placeholder="Todo here"
                value={todo}
                name='todo'
                onChange={handleTodo}
                />

                <button>Add</button>
            </form>
        </div>
    )
}
