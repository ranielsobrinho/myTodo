import React, { useEffect } from 'react';

import Api from '../../services/Api'

export default function Todos(){
    
    useEffect(() => {
        const userId = sessionStorage.getItem('userId');
        Api.get(`/users/${userId}/todos`)
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