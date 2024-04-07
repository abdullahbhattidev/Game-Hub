import { useQuery } from "@tanstack/react-query";
import { default as APIClient, fetchResponse } from "../api-client";
import platfroms from "../apiData/platfroms";

const apiClient = new APIClient<platform>('/genres')
export interface platform{
    id: number;
    name: string;
    slug: string
}

function usePlatforms() {
    return useQuery({
        queryKey: ['platforms'],
        queryFn: ()=> apiClient.getAll(),
        staleTime: 24 *60*60*1000,
        initialData: platfroms
    })
}

export default usePlatforms