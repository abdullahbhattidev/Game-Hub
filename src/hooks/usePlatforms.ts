import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { default as APIClient } from "../api-client";
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
        staleTime:ms('24h'),
        initialData: platfroms
    })
}

export default usePlatforms