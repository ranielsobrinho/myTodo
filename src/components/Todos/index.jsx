import React, { useEffect, useState } from 'react';

import Api from '../../services/Api'
import './index.css'
import Button from '../Button';

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
        Api.delete(`/todos/${id}`)
        .then((res) => {
            // TODO: mostrar mensagem de retorno
            setTodos(todos.filter(todo => todo.id !== id));
        })
        .catch(err => alert(err))
    }

    function doneTodo(id) {
        Api.put(`/todos/${id}`, {
            done: true
        })
            .then((res) => {
                // TODO: mostrar mensagem de retorno
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
                                <Button onClick={ () => doneTodo(todo.id)} name="V"/>
                                <Button onClick={ () => deleteTodo(todo.id) } name="X"/>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}