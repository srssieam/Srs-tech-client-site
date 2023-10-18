import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../root/MainLayout";
import Home from "../pages/Home";
import CreateAccount from "../pages/CreateAccount";


const Router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/createAccount',
                element:<CreateAccount></CreateAccount>
            }
        ]
    }
])
export default Router;