import axios from 'axios';

const instanceApi = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com/v2/',
  headers: {
    'x-rapidapi-key': '07001ddf45msh6baf21d004e1ce6p122fc7jsn409824fba7d0'
  }
});

export default instanceApi;
