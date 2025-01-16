import axios from 'axios';

export const http = axios.create({
    baseURL: '/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        Content: 'application/json',
        'Content-Type': 'application/json',
    },
});