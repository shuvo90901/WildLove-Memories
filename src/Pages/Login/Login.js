import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from.pathname || '/';

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate(from, { replace: true })
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="min-h-screen bg-base-200">
            <div className="hero-content ">
                <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold pt-5 my-5">Login now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Write Your Email</span>
                            </label>
                            <input type="email"
                                name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Write Your Password</span>
                            </label>
                            <input type="password"
                                name='password' placeholder="Enter Your Password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-success">Login</button>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <label className="label">
                        <p className='py-4 mx-auto'>New in WildLove Memories ? <Link to='/register'>Please Register</Link></p>
                    </label>
                </div>
            </div>
        </div>
    )
};

export default Login;