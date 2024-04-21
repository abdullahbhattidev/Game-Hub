import { useQuery } from "@tanstack/react-query";
import APIClient from "../api-client";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>("games")

const useGameDetails = (slug: string)=> {
    return (
        useQuery({
            queryKey: ["games", slug],
            queryFn: ()=> apiClient.getDetails(slug)
        })
    )
}

export default useGameDetails