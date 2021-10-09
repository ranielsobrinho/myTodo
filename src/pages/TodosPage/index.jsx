import React from 'react';
import './index.css';

import TodoForm from '../../components/TodoForm';
import Todos from '../../components/Todos';
import Toolbar from '../../components/Toolbar'

export default function index() {
    return (
        <div className="todoPage">
            <Toolbar />
            <TodoForm />
            <Todos />
        </div>
    )
}
