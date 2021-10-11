import React, {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'

import Api from '../../services/Api'
import './index.css'
import Loading from '../Loading'
export default function UserData() {
    const [user, setUser] = useState([]);
    const [done, setDone] = useState([]);
    const [undone, setunDone] = useState([]);
    const [loading, setLoading] = useState(false);

    const {id} = useParams();
    
    useEffect(() => {
        Api.get(`/users/${id}`)
            .then((res) => {
                const user = Object.values(res.data);
                setUser(user);
                setLoading(true);
            })
            .catch(err => console.log(err));
    }, [id]);
    
    useEffect(()=> {
        Api.get(`/users/${id}/todos`)
        .then((res) => {
            setDone(res.data.filter(todo => todo.done === true));
        })
        .catch(err => console.log(err));
    }, [id])

    useEffect(()=> {
        Api.get(`/users/${id}/todos`)
        .then((res) => {
            setunDone(res.data.filter(todo => todo.done === false));
        })
        .catch(err => console.log(err));
    }, [id])

    const history = useHistory();
    function goBack(){
        history.push('/todos');
    }

    return (
        <div className="dataContent">
            <div className="content">
                {!loading && <Loading />}
                <p>Username: {user[1]}</p>
                <p>Email: {user[2]}</p>
                {done > undone ? <p>Você está produtivo</p> : <p>Você não está sendo produtivo</p>}
                <button className="alignButton" onClick={() => {goBack()}}>Voltar</button>
            </div>
        </div>
    )
}
