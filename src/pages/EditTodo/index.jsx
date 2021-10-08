import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import './index.css'
import {MdEdit} from 'react-icons/md';
import Button from '../../components/Button';
import Api from '../../services/Api'

export default function EditTodo() {
    const [edited, setEdited] = useState('');

    const {id} = useParams();
    const history = useHistory()

    useEffect(() => {
        Api.get(`/todos/${id}`)
        .then((res) => {
            setEdited(res.data.content)
        })
    }, [id])

    const handleEdited = e => {
        setEdited(e.target.value);
    }
    
    const handleSubmit = async e => {
        e.preventDefault();
        setEdited('');

        await Api.put(`/todos/${id}`, {
            content: edited
        })
        .then( () => {
                history.push('/todos')
            }
        )
        .catch(err => console.log(err))
    }

    function cancel() {
        history.push('/todos');
    }

    return (
        <div className="edit">
            <h3>Editar todo</h3>
            <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Add new todo"
                value={edited}
                name='todo'
                onChange={handleEdited}
                />

                <button><MdEdit />Edit</button>
                <Button name="Cancel" onClick={() => cancel()}/>
            </form>
        </div>
        </div>
    )
}
