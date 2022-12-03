import axios from 'axios'

export default axios.create({
    baseURL: "http://192.168.100.3:3000/api",
});