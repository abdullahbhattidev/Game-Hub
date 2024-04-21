import { create } from "zustand";
import { genre } from "../entities/genres";
import { platform } from "../entities/platform";

export interface GameQuery {
    genreId ?: number | null;
    platformId? : number |null;
    ordering ?: string | null;
    search?: string | null;
}

interface GameQueryStore{
    gameQuery: GameQuery,
    onSearch: (searchText:string)=>void,
    onSelectGenres: (genres:genre)=> void,
    onSelectPlatforms: (platforms:platform)=> void,
    onSelectSortItem : (value : string) => void
}

const useGameStore = create<GameQueryStore>(set=>({
    gameQuery:{},
    onSearch:(searchText) => set(state=> ({gameQuery: {...state.gameQuery, search:searchText}})),
    onSelectGenres:(genres)=> set(state=> ({gameQuery:{...state.gameQuery,genreId: genres.id}})),
    onSelectPlatforms:(platfroms)=> set(state=> ({gameQuery:{...state.gameQuery,platformId: platfroms.id}})),
    onSelectSortItem:(value)=> set(state=>({gameQuery: {...state.gameQuery,ordering:value}})),
}))

export default useGameStore