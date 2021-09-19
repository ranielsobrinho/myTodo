import React, {useState} from 'react';
import './index.css'

function Form(props){
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setInput('');
    }

    return(        
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Your email here" 
                value={input} 
                name="email" 
                className="emailInput"
                onChange={handleChange}/>

                <button className="submit">{props.name}</button>
            </form>
    );
}

export default Form;