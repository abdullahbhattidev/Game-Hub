import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { default as APIClient } from "../api-client";
import genres from "../apiData/genres";
import { genre } from "../entities/genres";

const apiClient = new APIClient<genre>('/genres')
function useGenres() {
    return useQuery({
        queryKey: ['genres'],
        queryFn: ()=> apiClient.getAll(),
        initialData: genres,
        staleTime: ms('24h')
    })
}

export default useGenres