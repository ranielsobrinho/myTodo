import React, {useState} from 'react';
import api from '../../services/Api';

export default function SignInForm (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    
    const handlePassword = e => {
        setPassword(e.target.value);
    }

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
        }).catch((err) => console.log(err));
    }

    return(        
            <form onSubmit={handleSubmit}>
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

                <button className="submit">SignIn</button>
            </form>
    );
}