import building from '../assets/buildings.png'
import apert from '../assets/apert.jpg'

const About = () => {
    return (
        <div className="md:my-11 lg:my-24 p-4 md:p-10 lg:p-0 max-w-[1320px] mx-auto">
            <h1 className="text-5xl font-handlee font-semibold text-center ">About SrsTech</h1>
            <div>
                <p className="md:text-xl md:w-2/3 mx-auto text-center mt-4">Welcome to SrsTech, your gateway to the exciting world of electronics and technology. We are passionate about staying at the forefront of innovation and bringing you the latest insights, products, and trends in the tech universe.</p>
            </div>
            <div className='my-10'>
                <h3 className="text-3xl font-semibold mb-7">Our story</h3>
                <div className='flex flex-col-reverse md:flex-row justify-between md:gap-8 items-center'>
                        <p className="md:text-xl text-justify mt-4 flex-1">Founded At 2023, SrsTech has grown from a small startup to a trusted online destination for all things tech. Our journey began with a simple idea: to offer an extensive selection of top-quality electronics and gadgets at competitive prices. We wanted to create a place where tech enthusiasts, professionals, and everyday users could explore, shop, and find inspiration.</p>
                        <img className='md:w-[300px] lg:w-[450px] float-right flex-1'  src={building} alt="" />
                </div>
            </div>
            <div className='my-10'>
                <h3 className="text-3xl font-semibold mb-7">What Sets Us Apart</h3>
                <div className='flex flex-col-reverse md:flex-row-reverse justify-between md:gap-8 items-center'>
                        <p className="md:text-xl text-justify mt-4 flex-1">What makes SrsTech unique is our dedication to customer satisfaction and our commitment to quality. We carefully curate our product offerings to ensure that you have access to the best brands and the latest innovations. Our team of tech experts is here to assist you in making informed decisions, answering your questions, and providing exceptional customer support.</p>
                        <img className='md:w-[300px] lg:w-[400px] float-right flex-1'  src={apert} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;