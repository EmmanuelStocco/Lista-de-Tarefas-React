import axios from 'axios'

const api = axios.create({
    //buscando informações da api
    baseURL: 'http://localhost:8080'
})

export default api;