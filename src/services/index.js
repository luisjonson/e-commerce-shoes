import axios from 'axios'

export const API = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
        'Content-Type': 'application/json'
    }
})


export const APIBACKEND = axios.create({
    baseURL:  import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})

