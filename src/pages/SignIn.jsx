import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    const [signinError, setsigninError] = useState(null);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signInUser(email, password)
            .then(res => {
                console.log(res.user)
                setsigninError(null)
                Swal.fire(
                    'Sign in Successful',
                    'Thank you for being with us',
                    'success'
                )
            })
            .catch(err => {
                console.log(err)
                setsigninError('Wrong Email or Password !')
                Swal.fire({
                    icon: 'error',
                    title: 'Sign in Failed',
                    text: 'Something went wrong!',
                })
            })
    }
    return (
        <div className=" md:my-11 lg:my-24 text-2xl font-semibold space-y-7 p-4">
            <h1 className="text-5xl font-handlee font-semibold text-center ">Sign in</h1>
            <p className="text-center">Sign in with your email address and password below.</p>
            <div className="lg:p-0">
                <form onSubmit={handleSignIn} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-handlee">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input border border-[#218171]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-handlee">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input border border-[#218171]" required />
                    </div>
                    <div className="form-control">
                        <p className='text-red-700 text-2xl font-semibold'>{signinError}</p>
                    </div>
                    <div className="form-control my-4">
                        <button className="btn bg-[#144940] normal-case text-xl max-w-max mx-auto hover:bg-[#28685d] text-white">Sign in</button>
                    </div>
                </form>
                <p className="text-center text-xl font-normal">Do not have any account? Please <Link to='/createAccount' className="text-blue-500 hover:underline">create account</Link> first.</p>
                <p className="text-center">Or,</p>
                <button className="btn bg-[#144940] normal-case text-xl max-w-max mx-auto hover:bg-[#28685d] text-white flex items-center gap-3">Sign in with google <span><FcGoogle className="text-2xl"></FcGoogle></span></button>
            </div>
        </div>
    );
};

export default SignIn;