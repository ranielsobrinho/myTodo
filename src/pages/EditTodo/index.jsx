import React from 'react'

import './index.css'
import TodoForm from '../../components/TodoForm'

export default function EditTodo() {

    return (
        <div className="edit">
            <h3>Editar todo</h3>
            <TodoForm />
        </div>
    )
}
