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

function useGames (selectedGenre: genres | null, selectedPlatform: platform | null) {
   return (
    useData<Game>("/games", {params: {genres: selectedGenre?.id, parent_platforms: selectedPlatform?.id}}, [selectedGenre?.id, selectedPlatform?.id] )
   )   
}

export default useGames
