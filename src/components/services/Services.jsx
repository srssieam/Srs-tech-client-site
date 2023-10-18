import { MdOutlineLocalShipping } from 'react-icons/md';
import { FiClock, FiCalendar } from 'react-icons/fi';
import { BsCalendarCheck } from 'react-icons/bs';

const Services = () => {
    return (
        <div className="max-w-[1320px] lg:mx-auto grid md:grid-cols-4 lg:gap-7 my-20 mx-5">
            <div className="border-2 border-[#218171] p-2 md:p-4 lg:p-8 flex flex-col lg:flex-row items-center gap-6">
                <div>
                    <MdOutlineLocalShipping className='text-5xl'></MdOutlineLocalShipping>
                </div>
                <div>
                    <h3 className='font-semibold'>FREE SHIPPING</h3>
                    <p>Free for orders over 100$</p>
                </div>
            </div>
            <div className="border-2 border-[#218171] p-2 md:p-4 lg:p-8 flex flex-col lg:flex-row items-center gap-6">
                <div>
                    <FiClock className='text-5xl'></FiClock>
                </div>
                <div>
                    <h3 className='font-semibold'>24/7 Support</h3>
                    <p>Fast, professional support</p>
                </div>
            </div>
            <div className="border-2 border-[#218171] p-2 md:p-4 lg:p-8 flex flex-col lg:flex-row items-center gap-6">
                <div>
                    <FiCalendar className='text-5xl'></FiCalendar>
                </div>
                <div>
                    <h3 className='font-semibold'>CHOOSE DELIVERY DATE</h3>
                    <p>Flexible delivery dates</p>
                </div>
            </div>
            <div className="border-2 border-[#218171] p-2 md:p-4 lg:p-8 flex flex-col lg:flex-row items-center gap-6">
                <div>
                    <BsCalendarCheck className='text-5xl'></BsCalendarCheck>
                </div>
                <div>
                    <h3 className='font-semibold'>EXTENDED SUPPORT PERIOD</h3>
                    <p>30 days return policy</p>
                </div>
            </div>
            
        </div>
    );
};

export default Services;