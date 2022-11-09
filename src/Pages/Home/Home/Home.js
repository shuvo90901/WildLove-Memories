import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import camera from '../../../images/camera.jpg'
import camera2 from '../../../images/camera2.jpg'
import tiger from '../../../images/tiger.jpg'
import './Home.css'

const Home = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <div className='md:grid grid-cols-2 gap-10 items-center mx-5 my-16  mb-32'>
                <div>
                    <h3 className="text-4xl pb-16"><i>WildLife Photography</i></h3>
                    <h5 className="text-2xl">Wildlife photography is a genre of photography concerned with documenting various forms of wildlife in their natural habitat.</h5>
                </div>
                <div className=''>
                    <img className='rounded-xl' src={camera} alt="" />
                </div>
            </div>
            <div className='md:grid grid-cols-2 gap-10 items-center mx-5 my-48'>
                <div className=''>
                    <img className='rounded-xl' src={camera2} alt="" />
                </div>
                <div>
                    <h3 className="text-2xl pb-16">About Us</h3>
                    <p>In the early days of photography, it was difficult to get a photograph of wildlife due to slow lenses and the low sensitivity of photographic media.[2] Earlier photos of animals were often captive animals.[3][4] These included photos of lion cubs taken at the Bristol zoo in 1854 and in 1864, photos of the last Quagga by Frank Hayes.</p>
                </div>

            </div>
            <div className='md:flex justify-center'>

                <div>
                    <img className='w-96 rounded-xl' src={tiger} alt="" />
                </div>
                <div className="card w-96 bg-stone-200 shadow-xl ">
                    <div className="card-body">
                        <h5 className="text-2xl">Appreciating Nature</h5>
                        <hr className='bg-orange-300 h-1' />
                        <h5 className="text-2xl">Mammal Photography</h5>
                        <hr className='bg-orange-300 h-1' />
                        <h5 className="text-2xl">Bird Photography</h5>
                        <hr className='bg-orange-300 h-1' />
                        <h5 className="text-2xl">Underwater Photography</h5>
                        <hr className='bg-orange-300 h-1' />
                        <h5 className="text-2xl">Getting Close to Wildlife</h5>
                        <hr className='bg-orange-300 h-1' />
                        <h5 className="text-2xl"> Finding Wildlife to Photograph</h5>
                        <hr className='bg-orange-300 h-1' />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;