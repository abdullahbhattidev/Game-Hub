import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import GameDetail from "./pages/GameDetail";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const route = createBrowserRouter([
    {path:"/",
     element:<Layout/>,
     errorElement: <ErrorPage/>,
     children:[
        {index: true, element:<HomePage/>},
        {path: "games/:slug", element:<GameDetail/>}
    ]
    }
])

export default route