import React, { useEffect, useState } from 'react';

import Api from '../../services/Api'
import './index.css'

export default function Todos(){
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        Api.get(`/users/${userId}/todos`)
            .then((res) => {
                setTodos(res.data.filter(todo => todo.done === false));
            })
            .catch(err => console.log(err));
        }, [todos]);
        
    function deleteTodo(id) {
        Api.delete(`/todos/${id}`);
        setTodos(todos.filter(todo => todo.id !== id));
    }

    function doneTodo(id) {
        Api.put(`/todos/${id}`, {
            done: true
        })
            .then((res) => {
                alert('deu certo')
            })
            .catch(err => alert(err));
    }

    return(
        <div className="container">
            {todos
                .map((todo, id) => {
                    return (
                        <div key={id} className="todos">
                            <p>{todo.content}</p>
                            <div className="buttons">
                                <button onClick={ () => doneTodo(todo.id)} >V</button>
                                <button onClick={ () => deleteTodo(todo.id) }>X</button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}