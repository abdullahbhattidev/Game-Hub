import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { fetchResponse } from "../api-client";
import { GameQuery } from "../stores/GameQueryStore";
import { Game } from "../entities/Game";

const apiClient = new APIClient<Game>('/games')

function useGames (GameQuery: GameQuery) {
   return useInfiniteQuery<fetchResponse<Game>, Error>({
    queryKey: ['games', GameQuery],
    queryFn: ({pageParam = 1})=> apiClient.getAll({
        params: {
                    genres: GameQuery.genreId, 
                    parent_platforms: GameQuery.platformId, 
                    ordering: GameQuery.ordering,
                    search: GameQuery.search,
                    page: pageParam,
                    page_size: 20
                }}),
    getNextPageParam:(lastPage, allPages) => {
        return lastPage.next? allPages.length+1: undefined;
    },
    staleTime: ms('24h')
   })
}

export default useGames
