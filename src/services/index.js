import axios from 'axios'

export const API = axios.create({
    baseURL: 'https://fakestoreapi.com',
    // headers: {
    //     'Content-Type': 'application/json'
    // }
})


export const APIBACKEND = axios.create({
    baseURL: 'http://localhost:3000',
})

