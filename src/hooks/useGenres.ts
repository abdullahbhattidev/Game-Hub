import genres from "../apiData/genres";

export interface genres {
    id: number;
    name: string;
    slug: string;
    games_count: number;	
    image_background: string
}

function useGenres() {
    return {data: genres.results, error: null, isLoading: false,}
}

export default useGenres