import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetail from "./pages/GameDetail";
import ErrorPage from "./pages/ErrorPage";

const route = createBrowserRouter([
    {path:"/",
     element:<Layout/>,
     errorElement: <ErrorPage/>,
     children:[
        {index: true, element:<HomePage/>},
        {path: "gamedetails/:id", element:<GameDetail/>}
    ]
    }
])

export default route