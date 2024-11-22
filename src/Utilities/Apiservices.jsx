import axios from "axios"
//temp mail revaw48202@huizk.com

const API_KEY = "https://673ea0dfa9bc276ec4b50ff1.mockapi.io";
export const axiosService = axios.create({
    baseURL:API_KEY,
    headers:{
        "Content-Type":"application/json"
    }
})

