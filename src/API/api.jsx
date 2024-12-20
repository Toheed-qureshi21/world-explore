import axios from "axios"
// URL = "https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags"
const api = axios.create({
    baseURL:"https://restcountries.com/v3.1",
});
export const gotData = async () => {
    const response = await api.get("/all?fields=name,population,region,capital,flags");    
     return response.status===200 ? response.data :[];
}
export const individualData = async (name) => {
    const response = await api.get(`/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
    return response.status===200 ? response.data :[];
}