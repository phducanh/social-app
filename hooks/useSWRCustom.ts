import axios from 'axios';


// const getData =async (url)=>{
//     const data = await axios.get(url)
//     .then(res => res.data)
//     .catch(err=>console.log("Data fetching error in useSWRCustom"));
// }

export default async function getData(url){
    const data = await axios.get(url).then(res => res.data).catch(err=>console.log("Data fetching error in useSWRCustom"));
    return data;
}