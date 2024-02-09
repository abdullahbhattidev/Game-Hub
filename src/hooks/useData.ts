import { useEffect, useState } from "react";
import apiClient from "../api-client";
import { CanceledError } from "axios";

interface fetchResponse<T>{
    count: number;
    results: T[]
}

function useData <T> (endpoint: string) {
    const [data,setdata] = useState<T[]>([])
    const [error, seterror] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=> {
        setIsLoading(true)
        const controller = new AbortController();
        apiClient.get<fetchResponse<T>>(endpoint, {signal: controller.signal})
        .then(res => {setdata(res.data.results); setIsLoading(false)})
        .catch(err => {if(err instanceof CanceledError) return; 
                       seterror(err.message); setIsLoading(false)});

        return ()=> controller.abort()
    }, [])

    return {data, error, isLoading}
}

export default useData