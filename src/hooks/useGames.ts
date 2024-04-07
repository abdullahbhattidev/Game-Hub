import { QueryClient, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { genres } from "./useGenres";
import APIClient, { fetchResponse } from "../api-client";
import { platform } from "./usePlatforms";

const apiClient = new APIClient<Game>('/games')

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: platform} [];
    metacritic: number;
    rating_top: number
}

function useGames (GameQuery: GameQuery) {
//    const queryClient = new QueryClient();
   return useQuery<fetchResponse<Game>, Error>({
    queryKey: ['games', GameQuery],
    queryFn: ()=> apiClient.getAll({
        params: {
                    genres: GameQuery.genre?.id, 
                    parent_platforms: GameQuery.platform?.id, 
                    ordering: GameQuery.ordering,
                    search: GameQuery.search
                }})
   })
}

export default useGames
