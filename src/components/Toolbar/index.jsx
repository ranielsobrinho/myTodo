import React from 'react'
import './index.css'
import SignInForm from '../SignInForm';

import {BiTask} from 'react-icons/bi';
export default function Toolbar () {
        return (
            <div className="Toolbar">
                <nav>
                    <h2 className="Logo"><BiTask />MyTodo</h2>
                    <div className="LoginForm" >
                        <SignInForm />
                    </div>
                </nav>
            </div>
        )
}
