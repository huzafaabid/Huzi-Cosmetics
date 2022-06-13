import axios from 'axios';

const url = "http://localhost:5000";


export const addNewCartItem = async (orderDetail) =>
{
    await axios.post(`${url}/add-to-cart`, orderDetail);
}
