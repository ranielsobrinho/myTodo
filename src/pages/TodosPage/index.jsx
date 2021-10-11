import React from 'react';
import './index.css';

import TodoForm from '../../components/TodoForm';
import ToggleTodos from '../../components/ToggleTodos';
import Toolbar from '../../components/Toolbar'

export default function index() {
    return (
        <div className="todoPage">
            <Toolbar />
            <TodoForm />
            <ToggleTodos />
        </div>
    )
}
