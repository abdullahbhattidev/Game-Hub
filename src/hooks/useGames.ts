import { useEffect, useState } from "react";
import apiClient from "../api-client";
import { CanceledError } from "axios";

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
}

interface fetchGamesResponse {
    count: number;
    results: Game[]
}

function useGames () {
    const [games,setgames] = useState<Game[]>([])
    const [error, seterror] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=> {
        setIsLoading(true)
        const controller = new AbortController();
        apiClient.get<fetchGamesResponse>("/games", {signal: controller.signal})
        .then(res => {setgames(res.data.results); setIsLoading(false)})
        .catch(err => {if(err instanceof CanceledError) return; 
                       seterror(err.message); setIsLoading(false)});

        return ()=> controller.abort()
    }, [])

    return {games, error, isLoading}
}

export default useGames