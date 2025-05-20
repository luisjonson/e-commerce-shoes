import axios from 'axios'

export const API = axios.create({
    baseURL: 'https://fakestoreapi.com',
    // headers: {
    //     'Content-Type': 'application/json'
    // }
})