import axios from "axios";
const TOKEN = "co2jnfhr01qvggee49vgco2jnfhr01qvggee4a00"

export default axios.create({
    baseURL: "https://finnhub.io/api/v1" ,
    params: {
        token : TOKEN, 
    }
})