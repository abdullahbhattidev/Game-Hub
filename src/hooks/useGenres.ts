import { useQuery } from "@tanstack/react-query";
import { default as APIClient, fetchResponse } from "../api-client";
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
        initialData: genres
    })
}

export default useGenres