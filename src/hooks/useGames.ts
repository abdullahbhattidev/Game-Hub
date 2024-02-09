import useData from "./useData";

interface platform {
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

function useGames () {
   return useData<Game>("/games")
}

export default useGames