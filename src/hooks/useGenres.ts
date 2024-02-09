import useData from "./useData";

interface genres {
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