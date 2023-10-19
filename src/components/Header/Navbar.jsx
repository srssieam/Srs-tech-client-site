import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png'
import './Header.css'
import { FaSearch } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addProduct'>Add product</NavLink></li>
        <li><NavLink to='/featuredProducts'>Featured products</NavLink></li>
        <li><NavLink to='/brands'>Brands</NavLink></li>
        <li><NavLink to='/about'>About us</NavLink></li>
        <li><NavLink to='/contact'>Contact us</NavLink></li>
    </>
    return (
        <div  className=' bg-blue-950'>
            <div className='max-w-[1320px] mx-auto'>
                {/* top nav */}
                <div className="flex justify-between items-center py-4 px-4">
                    <div className="">
                        <img src={logo} className='w-24  md:w-36' alt="" />
                    </div>
                    <div className=' hidden md:visible md:flex items-center'>
                        <input className='px-2 py-2 outline-none rounded-xl rounded-r-none border-2 border-[#218171] border-r-0 w-[300px]' type="text" name="" id="" placeholder='Search' />
                        <button className='text-xl px-4 rounded-r-xl py-[10px] bg-[#218171] hover:bg-[#22554c] text-white border-2 border-[#218171] border-l-0'><FaSearch></FaSearch></button>
                    </div>
                    <div className="  text-white text-base font-handlee">
                        <NavLink to='/signIn'><button className="px-1 md:px-2  border-r-2 border-r-[#218171] rounded-r-none  hover:text-cyan-300">Sign in</button></NavLink>
                        <NavLink to='/createAccount'><button className="px-1 md:px-2  hover:text-cyan-300">Create Account</button></NavLink>
                    </div>
                </div>

                {/* bottom nav */}
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className=" flex gap-6 px-2 text-white font-handlee text-xl">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <li className=' list-none'><NavLink to='/cart' className='flex mr-4'>Cart<BsCart3 className='text-2xl'></BsCart3></NavLink></li>
                        {/* theme toggler */}
                        <label className="swap swap-rotate">
                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox" />
                            {/* sun icon */}
                            <svg className="swap-on fill-current w-7 h-7 text-[#218171]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                            {/* moon icon */}
                            <svg className="swap-off fill-current w-7 h-7 text-[#218171]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;