import axios from "axios";
export interface fetchResponse<T>{
    count: number;
    results: T[]
}
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "6fa4338a15224948ae9a55ca8de62846"
    }
})