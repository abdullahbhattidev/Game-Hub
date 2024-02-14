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

function useGames (selectedGenre: genres | null) {
   return (
    useData<Game>("/games", {params: {genres: selectedGenre?.id}}, [selectedGenre?.id] )
   )   
}

export default useGames
