import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://18.234.24.100:8080/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        Content: 'application/json',
        'Content-Type': 'application/json',
    },
});