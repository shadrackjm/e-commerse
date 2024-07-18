const { default: axios } = require("axios");

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY
const apiUrl = 'http://localhost:1337/api';

const axiosClient = axios.create({
    baseURL: apiUrl,
    headers:{
        Authorization: `Bearer ${apiKey}`
    }
});

const latestProducts =() => axiosClient.get('/products?populate=*');

const getProductById =(id) => axiosClient.get('/products/'+id+'?populate=*');

const getProductByCategory =(category) => axiosClient.get('/products?filters[category][$eq]='+category+'&populate=*');

export default {
    latestProducts,
    getProductById,
    getProductByCategory
}