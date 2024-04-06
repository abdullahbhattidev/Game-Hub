import { QueryClient, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { genres } from "./useGenres";
import apiClient, { fetchResponse } from "../api-client";

export interface platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: platform} [];
    metacritic: number;
    rating_top: number
}

function useGames (GameQuery: GameQuery) {
    const queryClient = new QueryClient();
   return useQuery<fetchResponse<Game>, Error>({
    queryKey: ['games', GameQuery],
    queryFn: ()=> apiClient.get<fetchResponse<Game>>('/games', {params: {
            genres: GameQuery.genre?.id, 
            parent_platforms: GameQuery.platform?.id, 
            ordering: GameQuery.ordering,
            search: GameQuery.search
        }})
                            .then(res=> res.data),
   })
}

export default useGames
