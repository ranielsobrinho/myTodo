import React from 'react'
import './index.css'
import SignInForm from '../SignInForm';

export default function Toolbar () {
        return (
            <div className="Toolbar">
                <nav>
                    <h2 className="Logo">MyTodo</h2>
                    <div className="LoginForm" >
                        <SignInForm />
                    </div>
                </nav>
            </div>
        )
}
