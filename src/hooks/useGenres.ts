import { useQuery } from "@tanstack/react-query";
import genres from "../apiData/genres";
import apiClient, { fetchResponse } from "../api-client";


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
        queryFn: ()=> apiClient.get<fetchResponse<genres>>('/genres')
                                .then(res=> res.data),
        staleTime: 24 *60*60*1000,
        initialData: genres
    })
}

export default useGenres