import React, { Component } from 'react'
import './index.css'
import Form from '../Form'

export default class Toolbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <h2 className="Logo">MyTodo</h2>
                    <div className="LoginForm" >
                        <Form name="Login"/>
                    </div>
                </nav>
                <div className="RegisterForm">
                    <h3>Come to finish all your tasks and stay productive.</h3>
                    <Form name="Register"/>
                </div>
            </div>
        )
    }
}
