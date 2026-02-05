import axios from "axios";

export const api = axios.create({
    baseURL:"https://chatapp-backend-production-c98d.up.railway.app",
    withCredentials:true,
})