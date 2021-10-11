import React,{useState} from 'react';
import './index.css';


import SignInForm from '../../components/SignInForm';
import RegisterForm from '../../components/RegisterForm';

export default function Home () {
    const [login, setLogin] = useState(true);

    function toggleLogin(){
        setLogin(!login);
    }

    return (
        <div>
            <div className="toggleForm">
                {login ? <SignInForm /> : <RegisterForm />}
                <div className="toggleMessage">
                    <p>Don't have an account?</p>
                    <button onClick={() => {toggleLogin()}}>Click here to register.</button>
                </div>
            </div>
        </div>
    )
}
