import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../contexts/hooks/useTitle';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Register = () => {
    useTitle('Register')
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                handleProfileUpdate(name, photoURL)
            })
            .catch(err => console.error(err))
    }

    const handleProfileUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (
        <div className="min-h-screen bg-base-200">
            <div className="hero-content ">
                <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold pt-5 my-5">SignUp Please!</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Write Your Name</span>
                            </label>
                            <input type="text"
                                name='name' placeholder="Enter Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Write Your Email</span>
                            </label>
                            <input type="email"
                                name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Write Your PhotoURL</span>
                            </label>
                            <input type="text"
                                name='photoURL' placeholder="Enter Your photoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Write Your Password</span>
                            </label>
                            <input type="password"
                                name='password' placeholder="Enter Your Password" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-success">Register</button>
                        </div>
                    </form>
                    <SocialLogin></SocialLogin>
                    <label className="label">
                        <p className='py-4 mx-auto'>If you have an account ? <Link to='/login'>Please Log In</Link></p>
                    </label>
                </div>
            </div>
        </div>
    )
};

export default Register;