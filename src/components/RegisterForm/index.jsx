import React, {useState} from 'react';

import api from '../../services/Api';
import './index.css'
import Button from '../Button';
import swal from 'sweetalert'

function RegisterForm(){
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleName = e => {
        setName(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setName('');
        setEmail('');
        setPassword('');

        api.post('/users', {
            name,
            email,
            password
        }).then(() => {
            swal("Parabéns","Cadastro feito com sucesso! Faça o login e aproveite.", "success");
        }).catch((err) => alert('Houve um problema no envio dos dados.'));
    }

    return(        
            <form className="registerForm" onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Nome" 
                value={name} 
                name="name" 
                className="input"
                onChange={handleName}
                minLength="3"/>

                <input type="email" 
                placeholder="E-mail" 
                value={email} 
                name="email" 
                className="input"
                onChange={handleEmail}
                minLength="8"/>

                <input type="password"
                placeholder="Senha"
                value={password}
                name="password"
                className="input"
                onChange={handlePassword}
                minLength="8"
                />

                <Button className="submit" name="Register"/>
            </form>
    );
}

export default RegisterForm;