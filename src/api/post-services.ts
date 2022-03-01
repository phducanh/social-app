import axios from 'axios';

import { API_BASE_URL } from '@/src/constants/common';

export function GetPost(url){
    return axios.get(`${API_BASE_URL}`).then(res => res.data).catch(err=>console.log("Data fetching error"));
}

export const SignIn = (data)=>{
    return axios.post(`${API_BASE_URL}/users/login`, data).then(res => res.data).catch(err=>console.log("Data fetching error"));
}

export const SignUp = (data)=>{
    return axios.post(`${API_BASE_URL}/users`, data).then(res => res.data).catch(err=>console.log("Data fetching error"));
}