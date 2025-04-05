import axios from 'axios';

const axiosHandler = axios.create({baseURL:'http://localhost:5000/api'}) 

export const getCardProducts = async ()=>{
    try {
        const res = await axiosHandler.get('/products')
        return res.data
    } catch (e) {
        console.log(e)
    }
}

