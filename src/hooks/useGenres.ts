import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { default as APIClient } from "../api-client";
import genres from "../apiData/genres";

const apiClient = new APIClient<genres>('/genres')
export interface genres {
    id: number;
    name: string;
    slug: string;
    games_count: number;	
    image_background: string
}

function useGenres() {
    return useQuery({
        queryKey: ['genres'],
        queryFn: ()=> apiClient.getAll(),
        initialData: genres,
        staleTime: ms('24h')
    })
}

export default useGenres