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
import BrandProducts from "../components/brand/BrandProducts";
import AllAddedProducts from "../pages/AllAddedProducts";
import EditProduct from "../pages/EditProduct";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/createAccount',
                element: <CreateAccount></CreateAccount>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/brands',
                element: <Brand></Brand>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/featuredProducts',
                element: <Products></Products>
            },
            {
                path: '/product-details/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: () => fetch('https://srs-tech-server.vercel.app/products')
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>,
                loader: () => fetch('https://srs-tech-server.vercel.app/cart')
            },
            {
                path: '/brandProduct/:brand',
                element: <BrandProducts></BrandProducts>,
            },
            {
                path: '/allAddedProducts',
                element: <PrivateRoute><AllAddedProducts></AllAddedProducts></PrivateRoute>,
                loader: () => fetch('https://srs-tech-server.vercel.app/products')
            },
            {
                path: '/editProducts/:id',
                element: <EditProduct></EditProduct>,
                loader: ({ params }) => fetch(`https://srs-tech-server.vercel.app/products/${params.id}`)
            }
        ]
    }
])
export default Router;