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
            <About></About>
        </div>
    );
};

export default Home;