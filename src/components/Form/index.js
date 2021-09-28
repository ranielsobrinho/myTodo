import React, {useState} from 'react';
import api from '../../services/Api';
import './index.css'

function Form(props){
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
            console.log('Dados inseridos na tabela');
        }).catch((err) => console.log(err));
    }

    return(        
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Name" 
                value={name} 
                name="name" 
                className="input"
                onChange={handleName}/>

                <input type="text" 
                placeholder="E-mail" 
                value={email} 
                name="email" 
                className="input"
                onChange={handleEmail}/>

                <input type="password"
                placeholder="Password"
                value={password}
                name="password"
                className="input"
                onChange={handlePassword}
                />

                <button className="submit">{props.name}</button>
            </form>
    );
}

export default Form;