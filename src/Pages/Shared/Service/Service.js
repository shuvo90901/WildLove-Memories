import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { FaStar } from 'react-icons/fa';

const Service = ({ service }) => {
    const { name, img, price, rating, discription, _id } = service;
    console.log(service)
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-10 rounded-2xl">
            <PhotoProvider>
                <PhotoView src={img}>
                    <img className='md:w-1/2 rounded-2xl' src={img} alt="Movie" />
                </PhotoView>
            </PhotoProvider>
            <div className="card-body text-start">
                <h2 className="card-title text-4xl pb-6"><i>{name}</i></h2>
                <p className='text-2xl'>{discription.slice(0, 100)}...see more</p>
                <div className='flex justify-evenly items-center text-orange-500 font-semibold'>
                    <p>Price : $ {price}</p>
                    <p className='flex items-center'>
                        {rating}
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                    </p>
                    <Link to={`/service/${_id}`}>
                        <button className="btn btn-primary">See Details</button>
                    </Link>
                </div>

            </div>
        </div >
    );
};

export default Service;