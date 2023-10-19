
import Contact from "../components/Contact/Contact";
import Products from "../components/Products/Products";
import Banner from "../components/banner/Banner";
import Brand from "../components/brand/Brand";
import Services from "../components/services/Services";
import About from "./About";



const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Brand></Brand>
            <Products></Products>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;