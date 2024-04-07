import { useQuery } from "@tanstack/react-query";
import platfroms from "../apiData/platfroms";
import apiClient, { fetchResponse } from "../api-client";

export interface platform{
    id: number;
    name: string;
    slug: string
}

function usePlatforms() {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: ()=> apiClient.get<fetchResponse<platform>>('/platforms/lists/parents')
                                .then(res=> res.data),
        staleTime: 24 *60*60*1000,
        initialData: platfroms
    })
}

export default usePlatforms