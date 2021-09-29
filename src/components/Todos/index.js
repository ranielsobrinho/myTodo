import React, { useEffect } from 'react';

import Api from '../../services/Api'

export default function Todos(){

    useEffect(() => {
        Api.get('/users/6/todos')
            .then((res) => {
                console.log(res.data);
            }).catch(err => console.log(err));
    }, []);

    return(
        <div>
            <h1>Todos!</h1>
        </div>
    )
}