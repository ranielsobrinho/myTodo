import React from 'react'
import './index.css'
import Form from '../Form'

export default function Toolbar () {
        return (
            <div>
                <nav>
                    <h2 className="Logo">MyTodo</h2>
                    <div className="LoginForm" >
                        <Form name="Login"/>
                    </div>
                </nav>
            </div>
        )
}
