import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom'

import { MdDoneOutline, MdOutlineClose } from "react-icons/md";
import swal from 'sweetalert';

import Api from '../../services/Api'
import './index.css'
import Loading from '../Loading';

export default function Todos(){
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        Api.get(`/users/${userId}/todos`)
            .then((res) => {
                setTodos(res.data.filter(todo => todo.done === true));
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

    async function undoneTodo(id) {
        await Api.put(`/todos/${id}`, {
            done: false
        })
            .then(() => {
                swal("Aviso!", "Tarefa terá que ser refeita!", "warning");
            })
            .catch(err => alert(err));
    }

    let history = useHistory();
    const redirect = (id) => {
        history.push(`/edit/${id}`);
    }

    return(
        <div className="containerDone">
            {!loading && <Loading />}
            {todos
                .map((todo, id) => {
                    return (
                        <div key={id} className="doneTodos"  >
                                <p className="doneTodo" onClick={ () => redirect(todo.id) }>{todo.content}</p>
                            <div className="doneButtons">
                                <button onClick={ () => undoneTodo(todo.id)} ><MdDoneOutline /></button>
                                <button onClick={ () => deleteTodo(todo.id) }><MdOutlineClose /> </button>
                            </div>
                        </div>
                    )
                })
            }
            {todos.length === 0 && <h3>Nenhuma tarefa finalizada.</h3>}

        </div>
    )
}