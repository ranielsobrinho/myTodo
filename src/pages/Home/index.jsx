import React,{useState} from 'react';
import Typing from 'react-typing-animation';
import './index.css';


import SignInForm from '../../components/SignInForm';
import RegisterForm from '../../components/RegisterForm';

export default function Home () {
    const [login, setLogin] = useState(true);

    function toggleLogin(){
        setLogin(!login);
    }

    return (
        <div className="homeContainer">
            <div className="writerContent">
                <Typing loop="true">
                    <h1>Venha finalizar suas tarefas.</h1>
                    <Typing.Backspace count={30} />
                    <h1>Permaneça produtivo.</h1>
                    <Typing.Backspace count={21} />
                </Typing>
            </div>
            <div className="toggleForm">
                {login ? <SignInForm /> : <RegisterForm />}
                <div className="toggleMessage">
                    <p>Não tem uma conta?</p>
                    <button onClick={() => {toggleLogin()}}>Clique aqui para se registrar.</button>
                </div>
            </div>
        </div>
    )
}
