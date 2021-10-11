import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'

import { MdDoneOutline, MdOutlineClose } from "react-icons/md";
import Loading from '../Loading'
import swal from 'sweetalert';

import Api from '../../services/Api'
import './index.css'

export default function Todos(){
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        Api.get(`/users/${userId}/todos`)
            .then((res) => {
                setTodos(res.data.filter(todo => todo.done === false));
                setLoading(true);
            })
            .catch(err => console.log(err));
        }, [todos]);
        
    async function deleteTodo(id) {
        swal({
            title: "Tem certeza?",
            text: "Uma vez deletado, não poderá recuperar!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                Api.delete(`/todos/${id}`)
                    .then(() => {
                        setTodos(todos.filter(todo => todo.id !== id));
                    })
                    .catch(err => alert(err))
                swal("Poof! Sua tarefa foi deletada!", {
                    icon: "success",
                });
            } else {
              swal("Your todo are safe!");
            }
          });
    }

    async function doneTodo(id) {
        await Api.put(`/todos/${id}`, {
            done: true
        })
            .then(() => {
                swal("Bom trabalho!", "Você finalizou uma tarefa! Parabéns", "success");
            })
            .catch(err => alert(err));
    }

    let history = useHistory();
    const redirect = (id) => {
        history.push(`/edit/${id}`);
    }

    return(
        <div className="container">
            {!loading && <Loading />}
            {todos
                .map((todo, id) => {
                    return (
                        <div key={id} className="todos"  >
                                <p onClick={ () => redirect(todo.id) }>{todo.content}</p>
                            <div className="buttons">
                                <button onClick={ () => doneTodo(todo.id)} ><MdDoneOutline /></button>
                                <button onClick={ () => deleteTodo(todo.id) }><MdOutlineClose /> </button>
                            </div>
                        </div>
                    )
                })
            }
            {todos.length === 0 && <h3>Nenhuma tarefa a ser feita.</h3>}

        </div>
    )
}