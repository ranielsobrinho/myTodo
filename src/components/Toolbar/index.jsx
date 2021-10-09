import React from 'react'
import { useHistory } from 'react-router-dom'
import './index.css'

import { BiTask } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
export default function Toolbar () {
    const history = useHistory();

    function logout(){
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userId');
        history.push('/');
    }


    return (
        <div className="Toolbar">
            <nav>
                <h2 className="Logo"><BiTask />MyTodo</h2>
                <div>
                    <button className="button" onClick={() => {logout()}}><FiLogOut />Logout</button>
                </div>
            </nav>
        </div>
    )
}
