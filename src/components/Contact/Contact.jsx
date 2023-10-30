import { SiFacebook } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Contact = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const comment = form.comment.value;
        console.log(name, email, phone, comment)
        Swal.fire(
            'Your message has been sent.',
            'Thank you for being with us',
            'success'
        )
        form.reset()
    }
    return (
        <div className="md:my-11 lg:my-16 p-4 md:p-10 lg:p-0 max-w-[1320px] mx-auto">
            <h1 className="text-5xl font-handlee font-semibold ">Contact Us</h1>
            <div className="grid md:grid-cols-2 md:gap-10 lg:gap-16">
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid lg:grid-cols-2 gap-5">
                        <div className="space-y-3">
                            <label htmlFor="name" className="text-xl">Name</label><br />
                            <input type="text" name="name" id="" placeholder="Name" className="p-3 w-full border border-[#218171]" />
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="email" className="text-xl">Email*</label><br />
                            <input type="text" name="email" id="" placeholder="Email" className="p-3 w-full border border-[#218171]" required />
                        </div>
                    </div>
                    <div className="space-y-3">
                        <label htmlFor="phone" className="text-xl">Phone number</label><br />
                        <input type="text" name="phone" id="" placeholder="Phone number" className="p-3 w-full border border-[#218171]" required />
                    </div>
                    <div className="space-y-3">
                        <label htmlFor="comment" className="text-xl">Comment*</label><br />
                        <textarea name="comment" id="" cols="30" rows="10" className="p-3 w-full border border-[#218171]" required></textarea>
                    </div>
                    <button type="submit" className="btn bg-[#144940] normal-case text-xl max-w-max mx-auto hover:bg-[#28685d] text-white">Send message</button>
                </form>
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">Got Questions ?</h1>
                    <p className="text-xl">If you’d like to learn more about us <br /> and our products, get in touch!</p>
                    <div className="md:flex gap-16">
                        <div>
                            <h3 className="text-2xl font-semibold">SrsTech</h3>
                            <address>FifthAve Street 31 <br />New York, USA
                            </address>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">Contact us</h3>
                            <p>contact@SrsTech.com <br /> +01 3XX XXX XXX</p>
                        </div>
                    </div>
                    <h3 className="text-2xl font-semibold">Follow us</h3>
                    <div className='flex gap-8'>
                        <Link to='https://www.facebook.com/'><SiFacebook className='text-4xl text-[#144940] transition-transform 1s hover:scale-125'></SiFacebook></Link>
                        <Link to='https://www.youtube.com/'><BsYoutube className='text-4xl text-[#144940] transition-transform 1s hover:scale-125'></BsYoutube></Link>
                        <Link to='https://twitter.com/?lang=en'><FaXTwitter className='text-4xl text-[#144940] transition-transform 1s hover:scale-125'></FaXTwitter></Link>
                        <Link to='https://www.instagram.com/'><FaInstagram className='text-4xl text-[#144940] transition-transform 1s hover:scale-125'></FaInstagram></Link>
                    </div>
                </div>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12329.298789947634!2d-74.00506900159402!3d40.73394471283048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259975c515555%3A0x4a45fc4021b26d52!2s31%205th%20Ave%2C%20New%20York%2C%20NY%2010003%2C%20USA!5e1!3m2!1sen!2sbd!4v1697677425813!5m2!1sen!2sbd" className='w-full h-[450px] mt-11'  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default Contact;