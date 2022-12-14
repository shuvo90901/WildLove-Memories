import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo from '../../../images/logo.jpg'

const Headers = ({ services }) => {
    // context
    const { logOut, user } = useContext(AuthContext);
    // logout in this website
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }


    return (
        <div className="navbar bg- py-5 font-semibold">
            <div className="navbar-start">
                {/* responsived navbar part */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/services'>Services</Link></li>
                        <li tabIndex={0}>
                            <Link className="justify-between">
                                Service
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                {
                                    services.map(service => <li ><Link className='btn btn-outline btn-success justify-start' to={`/service/${service._id}`}>{service.name}</Link></li>)
                                }
                            </ul>
                        </li>
                        {
                            user?.email ?
                                <>
                                    <li><Link to='/reviews'>My Reviews</Link></li>
                                    <li><Link to='/addservice'>Add Service</Link></li></>
                                :
                                <></>
                        }
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                {/* website name and logo */}
                <img className='md:w-20 w-12' src={logo} alt="" />
                <Link to='/' className="btn btn-ghost normal-case text-2xl text-orange-500 p-0"><i>WILDLOVE MEMORIES</i></Link>
            </div>
            <div className="navbar-center hidden lg:flex text-gray-500">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/services'>Services</Link></li>
                    <li tabIndex={0}>
                        <Link>
                            Service
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2">
                            {
                                services.map(service => <li ><Link className='btn btn-outline btn-success justify-start' to={`/service/${service._id}`}>{service.name}</Link></li>)
                            }
                        </ul>
                    </li>
                    {
                        user?.email ?
                            <>
                                <li><Link to='/reviews'>My Reviews</Link></li>
                                <li><Link to='/addservice'>Add Service</Link></li></>
                            :
                            <></>
                    }
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>
            {/* username and logout section */}
            <div className="navbar-end text-orange-800">

                {
                    user?.email ?
                        <>
                            <p>{user?.displayName}</p>
                            <img title={user?.displayName} className='h-8 rounded-full' src={user?.photoURL} alt="" />
                            <button onClick={handleLogOut} className="btn btn-outline btn-warning">
                                <p>Sign Out</p>
                            </button>
                        </>
                        :
                        <button className="btn btn-outline btn-warning mx-3">
                            <Link to='/login'>Log In</Link>
                        </button>
                }


            </div>
        </div>
    );
};

export default Headers;