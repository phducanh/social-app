import axios from 'axios';

import { API_BASE_URL } from '@/src/constants/common';

export function GetPost(url){
    return axios.get(`${API_BASE_URL}`).then(res => res.data).catch(err=>console.log("Data fetching error"));
}

export function SearchGroup(data, user){
    const headers = {
        "Access-Control-Allow-Origin" : "*",
        "Content-type": "Application/json",
        "Authorization": user?.token
        } 

    
    return axios.get(`${API_BASE_URL}/groups?search=${data.search}`,  {headers:headers}).then(res => res.data).catch(err=>console.log("Data fetching error"));
}

export const SignIn = (data)=>{
    return axios.post(`${API_BASE_URL}/users/login`, data).then(res => res.data).catch(err=>console.log("Data fetching error"));
}

export const SignUp = (data)=>{
    return axios.post(`${API_BASE_URL}/users`, data).then(res => res.data).catch(err=>console.log("Data fetching error"));
}

export const LogOut = (user)=>{
    const data = {}
    const headers = {
        "Access-Control-Allow-Origin" : "*",
        "Content-type": "Application/json",
        "Authorization": user?.token
        } 
    return axios.post(`${API_BASE_URL}/users/logout`,data, {headers: headers} ).then(res => res.data).catch(err=>console.log("Data fetching error"));
}

export const CreateGroup = (data, user)=>{
    const headers = {
        "Access-Control-Allow-Origin" : "*",
        "Content-type": "Application/json",
        "Authorization": user?.token
        } 
    return axios.post(`${API_BASE_URL}/groups`,data, {headers: headers} ).then(res => res.data).catch(err=>console.log("Data fetching error"));
}

export const JoinGroup = (groupId, user)=>{
    const headers = {
        "Access-Control-Allow-Origin" : "*",
        "Content-type": "Application/json",
        "Authorization": user?.token
        } 
    return axios.post(`${API_BASE_URL}/groups/${groupId}/request`,groupId, {headers: headers} ).then(res => res.data).catch(err=>console.log("Data fetching error"));
}


export const ResetPassword = (data)=>{
    return axios.post(`${API_BASE_URL}/users/forgot-password`,data ).then(res => res.data).catch(err=>console.log("Data fetching error"));
}

export const ChangePassword = (data, user)=>{
    const headers = {
        "Access-Control-Allow-Origin" : "*",
        "Content-type": "Application/json",
        "Authorization": user?.token
        } 
    return axios.post(`${API_BASE_URL}/users/change-password`,data, {headers: headers} ).then(res => res.data).catch(err=>console.log("Data fetching error"));
}

export const CreatePost = (data, user)=>{
    const headers = {
        "Access-Control-Allow-Origin" : "*",
        "Content-type": "Application/json",
        "Authorization": user?.token
        } 
    return axios.post(`${API_BASE_URL}/posts`,data, {headers: headers} ).then(res => res.data).catch(err=>console.log("Data fetching error"));
}

export const UploadFile = (data, user)=>{
    const headers = {
        "Access-Control-Allow-Origin" : "*",
        "Content-type": "Application/json",
        "Authorization": user?.token
        } 
    return axios.post(`${API_BASE_URL}/upload`,data, {headers: headers} ).then(res => res.data).catch(err=>console.log("Data fetching error"));
}

export const ToggleLike = (data, user)=>{
    const headers = {
        "Access-Control-Allow-Origin" : "*",
        "Content-type": "Application/json",
        "Authorization": user?.token
        } 
    return axios.post(`${API_BASE_URL}/posts/${data.id}/toggleLike`,data, {headers: headers} ).then(res => res.data).catch(err=>console.log("Data fetching error"));
}