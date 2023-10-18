import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../root/MainLayout";
import Home from "../pages/Home";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])
export default Router;