import React, {useState} from 'react';
import './index.css'

function Form(props){
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
        email('');
        password('');
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

                <button className="submit">{props.name}</button>
            </form>
    );
}

export default Form;