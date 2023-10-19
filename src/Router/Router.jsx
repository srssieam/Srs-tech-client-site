import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../root/MainLayout";
import Home from "../pages/Home";
import CreateAccount from "../pages/CreateAccount";
import SignIn from "../pages/SignIn";
import AddProduct from "../pages/AddProduct";
import Brand from "../components/brand/Brand";
import About from "../pages/About";
import Contact from "../components/Contact/Contact";
import Products from "../components/Products/Products";
import ProductDetails from "../components/Products/ProductDetails";
import Cart from "../pages/Cart";


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
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'/featuredProducts',
                element:<Products></Products>
            },
            {
                path:'/product-details/:id',
                element:<ProductDetails></ProductDetails>,
                loader:()=>fetch('http://127.0.0.1:9000/products')
            },
            {
                path:'/cart',
                element:<Cart></Cart>,
                loader:()=>fetch('http://127.0.0.1:9000/cart')
            }
        ]
    }
])
export default Router;