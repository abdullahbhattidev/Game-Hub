import { GameQuery } from "../App";
import useData from "./useData";
import { genres } from "./useGenres";

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

function useGames (GameQuery: GameQuery) {
   return (
    useData<Game>("/games", {params: {genres: GameQuery.genre?.id, parent_platforms: GameQuery.platform?.id, ordering: GameQuery.ordering}}, [GameQuery] )
   )   
}

export default useGames
