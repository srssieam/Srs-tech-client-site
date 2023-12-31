import apple from '../../assets/apple.png'
import samsung from '../../assets/samsung.png'
import walton from '../../assets/walton.jpg'
import lg from '../../assets/lg.png'
import dell from '../../assets/dell.png'
import sony from '../../assets/sony.png'
import { Link } from 'react-router-dom'

const Brand = () => {
    return (
        <div className="md:my-11 lg:my-24 p-4 md:p-0 max-w-[1320px] mx-auto">
            <h1 className="text-5xl font-handlee font-semibold text-center ">Our Trusted Brands</h1>
            <div className='flex flex-wrap justify-center gap-7 mt-12'>
                <Link to={'/brandProduct/apple'}>
                    <div className="border-2 border-[#218171] w-[320px] text-center p-6 transition hover:scale-110 cursor-pointer">
                        <img src={apple} alt="" className='w-[120px] h-[120px] mx-auto' />
                        <div>
                            <h3 className='text-2xl font-semibold my-5'>Apple</h3>
                        </div>
                    </div>
                </Link>
                <Link to={'/brandProduct/samsung'}>
                    <div className="border-2 border-[#218171] w-[320px] text-center p-6 transition hover:scale-110 cursor-pointer">
                        <img src={samsung} alt="" className='w-[200px] h-[120px] mx-auto' />
                        <div>
                            <h3 className='text-2xl font-semibold my-5'>Samsung</h3>
                        </div>
                    </div>
                </Link>
                <Link to={'/brandProduct/walton'}>
                    <div className="border-2 border-[#218171] w-[320px] text-center p-6 transition hover:scale-110 cursor-pointer">
                        <img src={walton} alt="" className='w-[200px] h-[120px] mx-auto' />
                        <div>
                            <h3 className='text-2xl font-semibold my-5'>Walton</h3>
                        </div>
                    </div>
                </Link>
                <Link to={'/brandProduct/lg'}>
                    <div className="border-2 border-[#218171] w-[320px] text-center p-6 transition hover:scale-110 cursor-pointer">
                        <img src={lg} alt="" className='w-[200px] h-[120px] mx-auto' />
                        <div>
                            <h3 className='text-2xl font-semibold my-5'>LG</h3>
                        </div>
                    </div>
                </Link>
                <Link to={'/brandProduct/dell'}>
                    <div className="border-2 border-[#218171] w-[320px] text-center p-6 transition hover:scale-110 cursor-pointer">
                        <img src={dell} alt="" className='w-[120px] h-[120px] mx-auto' />
                        <div>
                            <h3 className='text-2xl font-semibold my-5'>DELL</h3>
                        </div>
                    </div>
                </Link>
                <Link to={'/brandProduct/sony'}>
                    <div className="border-2 border-[#218171] w-[320px] text-center p-6 transition hover:scale-110 cursor-pointer">
                        <img src={sony} alt="" className='w-[200px] h-[120px] mx-auto' />
                        <div>
                            <h3 className='text-2xl font-semibold my-5'>Sony</h3>
                        </div>
                    </div>
                </Link>
            </div>

            <div>

            </div>

        </div>
    );
};

export default Brand;