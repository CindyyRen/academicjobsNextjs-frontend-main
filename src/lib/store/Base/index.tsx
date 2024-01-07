import axios from 'axios';

const baseURL ='https://api2.sciencejobs.com.au/api'
  // process.env.NODE_ENV === 'development'
  //   ? 'http://localhost:3500/api'
  //   : 'https://api2.sciencejobs.com.au/api';

const BaseApi = axios.create({
  baseURL,
});

export default BaseApi;
