import axios from 'axios'
const BASE_URL = 'http://localhost:4000';
const request = axios.create({
    baseURL: BASE_URL,
})

export default request