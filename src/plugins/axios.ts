

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: process.env.baseURL || process.env.apiUrl ||  "https://www.buffalocert.agri.up.ac.th" //"http://192.168.1.6:191" //"http://www.fattening.agri.up.ac.th:1003"// //"http://localhost:8000"// "https://www.le-buffalo.ml" //"http://192.168.1.112:8000" 
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

 

export default _axios
