import axios from 'axios';

let data = sessionStorage.getItem('token');

const api = axios.create({
    baseURL: "http://localhost:3333/",
    headers: {'Authorization': `Bearer ${data}`}
});

export default api;