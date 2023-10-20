
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const CreateAccount = () => {
    const { createUser, userInfo } = useContext(AuthContext);

    const handleCreateAccount = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);


        createUser(email, password)
            .then(res => {
                console.log(res.user)
                userInfo(name, photo)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div className=" md:my-11 lg:my-24 text-2xl font-semibold space-y-7 p-4">
            <h1 className="text-5xl font-handlee font-semibold text-center ">Create Account</h1>
            <p className="text-center">Creating an account lets you track your order history and store addresses for fast and easy checkouts.</p>
            <div className="lg:p-0">
                <form onSubmit={handleCreateAccount} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-handlee">Your name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input border border-[#218171]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-2xl font-semibold font-handlee">Photo URL</span>
                        </label>
                        <input type="text" name="photoUrl" placeholder="Enter your photo url" className="input border border-[#218171]" />
                    </div>
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
                    <div className="form-control my-4">
                        <button className="btn bg-[#144940] normal-case text-xl max-w-max mx-auto hover:bg-[#28685d] text-white">Create Account</button>
                    </div>
                </form>
                <p className="text-center text-xl font-normal">Already have an account? Please <Link to='/signIn' className="text-blue-500 hover:underline">Sign in</Link> now.</p>
            </div>
        </div>
    );
};

export default CreateAccount;