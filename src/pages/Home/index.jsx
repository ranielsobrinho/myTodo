import React from 'react';
import './index.css';

import Toolbar from '../../components/Toolbar';
import RegisterForm from '../../components/RegisterForm';

export default function Home () {
        return (
            <div>
                <Toolbar />
                <div className="RegisterForm">
                    <h3>Come to finish all your tasks and stay productive.</h3>
                    <RegisterForm />
                </div>
            </div>
        )
}