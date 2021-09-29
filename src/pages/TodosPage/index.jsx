import React from 'react'

import TodoForm from '../../components/TodoForm';
import Todos from '../../components/Todos';

export default function index() {
    return (
        <div>
            <TodoForm />
            <Todos />
        </div>
    )
}
