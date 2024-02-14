import useData from "./useData";

interface platform{
    id: number;
    name: string;
    slug: string
}

function usePlatforms() {
    return useData<platform>("/platforms/lists/parents")
}

export default usePlatforms