import axios from 'axios';

export default axios.create({
    baseURL: 'https://5fa97367c9b4e90016e6a7ec.mockapi.io/api',
    headers: {
        'Content-type': 'application/json'
    }
});