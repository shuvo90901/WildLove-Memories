import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { name, id, img, discription, price, rating } = service;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-10 rounded-2xl">
            <img className='md:w-1/2 rounded-2xl' src={img} alt="Movie" />

            <div className="card-body text-start">
                <h2 className="card-title text-4xl pb-6"><i>{name}</i></h2>
                <p className='text-xl'>{discription}</p>
                <div className='flex justify-evenly items-center'>
                    <p>{price}</p>
                    <p>{rating}</p>

                </div>

            </div>
        </div >
    );
};

export default ServiceDetails;