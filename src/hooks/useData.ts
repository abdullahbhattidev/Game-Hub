import { useEffect, useState } from "react";
import apiClient from "../api-client";
import { AxiosRequestConfig, CanceledError } from "axios";



function useData <T> (endpoint: string, requestConfig?: AxiosRequestConfig, dependencies?: any[]) {
    const [data,setdata] = useState<T[]>([])
    const [error, seterror] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=> {
        setIsLoading(true)
        const controller = new AbortController();
        apiClient.get<fetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
        .then(res => {setdata(res.data.results); setIsLoading(false)})
        .catch(err => {if(err instanceof CanceledError) return; 
                       seterror(err.message); setIsLoading(false)});

        return ()=> controller.abort()
    }, dependencies ? [...dependencies] : [])

    return {data, error, isLoading}
}

export default useData