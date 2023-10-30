import Slider1 from '../../assets/slider-1.jpg'
import Slider2 from '../../assets/slider-2.jpg'
import Slider3 from '../../assets/slider-3.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import { Link } from 'react-router-dom';
const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        nextArrow: <></>,
        prevArrow: <></>
    };
    return (
        <div>
            <Slider {...settings}>
                <div className='relative w-full h-[80vh]'>
                    <img src={Slider1} className='h-full w-full' alt="" />
                    <div className='absolute top-0 h-full w-full md:px-10 lg:px-36 flex flex-col gap-6 md:gap-0 md:flex-row items-center bg-[#0000003f]'>
                        <div className='flex-1'>
                            <div className='text-white  bg-[#0000006c] p-4 md:p-10 lg:p-20 rounded-2xl space-y-5'>
                                <h1 className='text-4xl mt-8 md:mt-0 lg:text-5xl font-handlee font-extrabold'>Your Gateway to the Digital World</h1>
                                <p className='text-2xl'>Explore the latest in technology and electronics to stay ahead in this digital age.</p>
                            </div>
                        </div>
                        <div className='flex-1 text-center'>
                            <Link to='/featuredProducts'><button className='px-5 py-3 bg-[#0000006c] text-white text-2xl font-bold font-handlee transition rounded-md hover:scale-125 bg-blend-luminosity'>Shop Now</button></Link>
                        </div>
                    </div>
                </div>


                <div className='relative w-full h-[80vh]'>
                    <img src={Slider2} className='h-full w-full' alt="" />
                    <div className='absolute top-0 h-full w-full md:px-10 lg:px-36 flex flex-col gap-6 md:gap-0 md:flex-row items-center bg-[#0000003f]'>
                        <div className='flex-1'>
                            <div className='text-white  bg-[#0000006c] p-4 md:p-10 lg:p-20 rounded-2xl space-y-5'>
                                <h1 className='text-4xl mt-8 md:mt-0 lg:text-5xl font-handlee font-extrabold'>Electrify Your Life with the Latest Gadgets</h1>
                                <p className='text-2xl'>Find excitement in everyday life with the most up-to-date electronics and gadgets.</p>
                            </div>
                        </div>
                        <div className='flex-1 text-center'>
                        <Link to='/featuredProducts'><button className='px-5 py-3 bg-[#0000006c] text-white text-2xl font-bold font-handlee transition rounded-md hover:scale-125 bg-blend-luminosity'>Shop Now</button></Link>
                        </div>
                    </div>
                </div>


                <div className='relative w-full h-[80vh]'>
                    <img src={Slider3} className='h-full w-full' alt="" />
                    <div className='absolute top-0 h-full w-full md:px-10 lg:px-36 flex flex-col gap-6 md:gap-0 md:flex-row items-center bg-[#0000003f]'>
                        <div className='flex-1'>
                            <div className='text-white  bg-[#0000006c] p-4 md:p-10 lg:p-20 rounded-2xl space-y-5'>
                                <h1 className='text-4xl mt-8 md:mt-0 lg:text-5xl font-handlee font-extrabold'>Explore the Future of Electronics</h1>
                                <p className='text-2xl'>Dive into the world of tomorrow's electronics and innovations right now.</p>
                            </div>
                        </div>
                        <div className='flex-1 text-center'>
                        <Link to='/featuredProducts'><button className='px-5 py-3 bg-[#0000006c] text-white text-2xl font-bold font-handlee transition rounded-md hover:scale-125 bg-blend-luminosity'>Shop Now</button></Link>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;