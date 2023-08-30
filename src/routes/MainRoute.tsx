import {createBrowserRouter}  from "react-router-dom"
import { Layout } from "../components/Block/Layout"
import { LandingPage } from "../pages/Landing"

export const MainRoute = createBrowserRouter(
    [
        {
            path:"/",
            element:<Layout/>,
            children:(
                [
                    {
                        index:true,
                        element:<LandingPage/>
                    },
                ]
            )
        }
    ]
)