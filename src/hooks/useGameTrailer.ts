import { useQuery } from "@tanstack/react-query";
import APIClient from "../api-client";
import { Trailer } from "../entities/Trailer";

const useGameTrailer=(Id?: number)=> {
    const apiClient = new APIClient<Trailer>(`/games/${Id}/movies`)
    return(
        useQuery({
            queryKey:["trailers", Id],
            queryFn: ()=> apiClient.getAll()
        })
    )
}

export default useGameTrailer