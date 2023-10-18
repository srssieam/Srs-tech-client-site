import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../root/MainLayout";
import Home from "../pages/Home";
import CreateAccount from "../pages/CreateAccount";
import SignIn from "../pages/SignIn";
import AddProduct from "../pages/AddProduct";
import Brand from "../components/brand/Brand";


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
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            },
            {
                path:'/addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/brands',
                element:<Brand></Brand>
            }
        ]
    }
])
export default Router;