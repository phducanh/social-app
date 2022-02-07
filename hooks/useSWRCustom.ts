//recommended fetching data hook for client side
import useSWR from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data).catch(err=>console.log("Data fetching error in useSWRCustom"));

export const getData = (url)=>{
    return useSWR(url, fetcher);
}