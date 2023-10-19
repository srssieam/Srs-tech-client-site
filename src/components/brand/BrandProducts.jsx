import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import addSlider1 from '../../assets/addSlider-1.png'
import addSlider2 from '../../assets/addSlider-2.png'
import addSlider3 from '../../assets/addSlider-3.png'
import Slider from "react-slick";
import ProductCard from "../Products/productCard";


const BrandProducts = () => {
    const { brand } = useParams();
    console.log(brand)
    const [brandProducts, setBrandProducts] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:9000/products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const findBrand = data.filter(b => b.brandName === brand)
                setBrandProducts(findBrand);
            })
    }, [brand])
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
        <div className="max-w-[1320px] mx-auto">
            <Slider {...settings}>
                <div className=' bg-gradient-to-r from-purple-700 to-blue-700 h-[60vh]  lg:h-[70vh] grid grid-cols-2'>
                    <div className=" md:flex items-center justify-between">
                        <div className="md:space-y-4 text-3xl mt-5 text-center md:mx-20 md:mt-0 flex-1">
                            <p className="md:text-4xl font-semibold text-white">Apple iPhone 15 Pro </p>
                            <h1 className=" font-semibold text-white">Up To 25% OFF</h1>
                            <p className=" font-semibold text-white">Don't miss out</p>
                        </div>
                        <img src={addSlider1} className='w-[80%] md:w-[20%] mx-auto p-2 flex-1  ' alt="" />
                    </div>
                </div>
                <div className=' bg-gradient-to-r from-green-800 to-lime-700 h-[60vh]  lg:h-[70vh] grid grid-cols-2'>
                    <div className=" md:flex items-center justify-between">
                        <div className="md:space-y-4 text-3xl mt-5 text-center md:mx-20 md:mt-0 flex-1">
                            <p className="md:text-4xl font-semibold text-white">Walton fridges </p>
                            <h1 className=" font-semibold text-white">Up To 30% OFF</h1>
                            <p className=" font-semibold text-white">2023 arrivals</p>
                        </div>
                        <img src={addSlider2} className='w-[80%] md:w-[50%] mx-auto p-2 flex-1  ' alt="" />
                    </div>
                </div>
                <div className=' bg-gradient-to-r  from-indigo-900 to-sky-700 h-[60vh]  lg:h-[70vh] grid grid-cols-2'>
                    <div className=" md:flex items-center justify-between">
                        <div className="md:space-y-4 text-3xl mt-5 text-center md:mx-20 md:mt-0 flex-1">
                            <p className="md:text-4xl font-semibold text-white">Samsung Smart TV </p>
                            <h1 className=" font-semibold text-white">Up To 15% OFF</h1>
                            <p className=" font-semibold text-white">New collections</p>
                        </div>
                        <img src={addSlider3} className='md:w-[20%] mx-auto p-2 flex-1  ' alt="" />
                    </div>
                </div>

            </Slider>

            {/* products*/}

            <h1 className="text-5xl font-handlee font-semibold text-center my-11">All {brand} products</h1>
            {
                brandProducts.length !== 0 ?
                    <div className="flex flex-wrap justify-center my-14 gap-6">
                        {
                            brandProducts?.map(product => <ProductCard key={brandProducts._id} singleProduct={product}></ProductCard>)
                        }
                    </div> :
                    <div className="h-[50vh] flex items-center justify-center">
                        <div className="text-center space-y-4 px-5 md:w-3/5">
                            <h1 className="text-4xl">Currently there is no product in this brand</h1>
                            <p className="text-xl">We are in the process of updating our product inventory to bring you the latest and greatest selection of products. We apologize for any inconvenience this may cause.</p>
                        </div>

                    </div>
            }

        </div>
    );
};

export default BrandProducts;