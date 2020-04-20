import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-38286.firebaseio.com/'
});

export default instance;