import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5174', 
});

export default axiosInstance;