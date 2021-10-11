import React, {useState} from 'react'

import './index.css'
import Todos from '../Todos';
import DoneTodos from '../DoneTodos';

export default function ToggleTodos() {
    const [done, setDone] = useState(false);

    function notDone() {
        setDone(false);
    }
    function isDone() {
        setDone(true);
    }
    return (
        <div className='toggleTodos'>
            <div className="toggleButtons">
                <button onClick={() => {notDone()}}>Pendentes</button>
                <button onClick={() => {isDone()}}>Finalizados</button>
            </div>
            {done ? <DoneTodos /> : <Todos />}
        </div>
    )
}
