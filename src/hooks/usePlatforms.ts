import platfroms from "../apiData/platfroms";
import useData from "./useData";

interface platform{
    id: number;
    name: string;
    slug: string
}

function usePlatforms() {
    return {data: platfroms, error: null, isLoading: false,}
}

export default usePlatforms