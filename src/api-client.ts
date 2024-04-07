import axios, { AxiosRequestConfig } from "axios";
export interface fetchResponse<T>{
    count: number;
    results: T[]
}
const axiosInstant = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "6fa4338a15224948ae9a55ca8de62846"
    }
})

class APIClient<T> {
    endpoint: string;
    constructor(endpoint:string){
        this.endpoint = endpoint
    }

    getAll = (config?:AxiosRequestConfig)=> {
        return axiosInstant.get<fetchResponse<T>>(this.endpoint,config )
                            .then(res=> res.data)
    }
}
export default APIClient