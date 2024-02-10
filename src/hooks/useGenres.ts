import useData from "./useData";

export interface genres {
    id: number;
    name: string;
    slug: string;
    games_count: number;	
    image_background: string
}

function useGenres() {
    return useData<genres>("/genres")
}

export default useGenres