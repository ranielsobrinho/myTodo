import React from 'react';
import './index.css';

import TodoForm from '../../components/TodoForm';
import Todos from '../../components/Todos';

export default function index() {
    return (
        <div className="todoPage">
            <TodoForm />
            <Todos />
        </div>
    )
}
