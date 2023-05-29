
import axios from "axios";
let instance = axios.create({
    baseURL:'/mock',
    timeout:5000
})
export const getTable = ()=>instance({url:`/getTable`,method:'get'})
