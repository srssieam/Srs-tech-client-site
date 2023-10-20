import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/footer/Footer";
import { useEffect } from "react";


const MainLayout = () => {
    const location = useLocation();
    useEffect(() => {
        document.title = location.pathname;
        document.title = `SrsTech ${location.pathname.replace("/", "-")}`;
    }, [location.pathname])

    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[80vh]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;