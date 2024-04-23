import { publishers } from "./Publishers";
import { genre } from "./genres";
import { platform } from "./platform";


export interface Game {
    id: number;
    name: string;
    slug: string;
    genres: genre[],
    publishers: publishers[]
    background_image: string;
    parent_platforms: { platform: platform; }[];
    metacritic: number;
    rating_top: number;
    description_raw: string;
}
