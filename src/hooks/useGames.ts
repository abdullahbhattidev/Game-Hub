import { QueryClient, useInfiniteQuery, useQuery } from "@tanstack/react-query";
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
   return useInfiniteQuery<fetchResponse<Game>, Error>({
    queryKey: ['games', GameQuery],
    queryFn: ({pageParam = 1})=> apiClient.getAll({
        params: {
                    genres: GameQuery.genre?.id, 
                    parent_platforms: GameQuery.platform?.id, 
                    ordering: GameQuery.ordering,
                    search: GameQuery.search,
                    page: pageParam,
                    page_size: 20
                }}),
    getNextPageParam:(lastPage, allPages) => {
        return lastPage.next? allPages.length+1: undefined;
    }
   })
}

export default useGames
