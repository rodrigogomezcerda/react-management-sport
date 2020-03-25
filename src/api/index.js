import axios from 'axios';

const instanceApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_API_KEY
  }
});

export default instanceApi;
