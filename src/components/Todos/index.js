import React, { useEffect, useState } from 'react';

import Api from '../../services/Api'
import './index.css'

export default function Todos(){
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        Api.get(`/users/${userId}/todos`)
            .then((res) => {
                setTodos(res.data);
            }).catch(err => console.log(err));
    }, []);

    return(
        <div className="container">
            {todos
                .map((todo, index) => {
                    return (
                        <div key={index} className="todos">
                            <p>{todo.content}</p>
                            
                        </div>
                    )
                })
            }

        </div>
    )
}