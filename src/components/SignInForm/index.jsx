import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

import api from '../../services/Api';
import Button from '../Button';

export default function SignInForm (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        setEmail('');
        setPassword('');

        api.post('/token', {
            email,
            password
        }).then((response) => {
            sessionStorage.setItem('token', response.data.token);
            sessionStorage.setItem('userId', response.data.userId);
            history.push('/todos');
        }).catch((err) => alert('Cadastre-se para utilizar nossos serviços'));
    }

    return(        
            <form onSubmit={handleSubmit}>
                <input type="email" 
                placeholder="E-mail" 
                value={email} 
                name="email" 
                className="signInInput"
                onChange={handleEmail}
                minLength="8"/>

                <input type="password"
                placeholder="Senha"
                value={password}
                name="password"
                className="signInInput"
                onChange={handlePassword}
                minLength="8"
                />

                <Button name="SignIn" />
            </form>
    );
}