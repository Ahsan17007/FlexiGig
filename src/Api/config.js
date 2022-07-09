import axios from 'axios';



const BASE_URL = 'https://flexigig-api.herokuapp.com/api/v1/'

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export { BASE_URL, client };
