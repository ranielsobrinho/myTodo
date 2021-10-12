import React,{useState} from 'react';
//import Typing from 'react-typing-animation';
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
                    <h1 className="typedOut t1">Venha finalizar suas tarefas.</h1>
                    <h1 className="typedOut2 t2">Permaneça produtivo.</h1>
            </div>
            <div className="toggleForm">
                {login ? <SignInForm /> : <RegisterForm />}
                <div className="toggleMessage">
                    <p>Não tem uma conta?</p>
                    <button onClick={() => {toggleLogin()}}>Registre-se aqui.</button>
                </div>
            </div>
        </div>
    )
}
