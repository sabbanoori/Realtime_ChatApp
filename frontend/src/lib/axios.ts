import axios from "axios";

export const api = axios.create({
    baseURL:"https://backendchatapp-production-2a9d.up.railway.app",
    withCredentials:true,
})