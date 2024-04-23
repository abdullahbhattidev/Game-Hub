import { useQuery } from "@tanstack/react-query";
import APIClient from "../api-client";
import { Trailer } from "../entities/Trailer";
import { Screenshots } from "../entities/Screenshots";


const useGameScreenshots=(Id?: number)=> {
    const apiClient = new APIClient<Screenshots>(`/games/${Id}/screenshots`)
    return(
        useQuery({
            queryKey:["screenshots", Id],
            queryFn: ()=> apiClient.getAll()
        })
    )
}

export default useGameScreenshots