import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, price, rating, discription, id } = service;
    console.log(service)
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl m-10 rounded-2xl">
            <img className='w-1/2 rounded-2xl' src={img} alt="Movie" />
            <div className="card-body text-start">
                <h2 className="card-title text-3xl pb-6"><i>{name}</i></h2>
                <p>{discription}</p>
                <div className='flex justify-evenly items-center'>
                    <p>{price}</p>
                    <p>{rating}</p>
                    <button className="btn btn-primary"><Link to={`/service/${id}`}>See Details</Link></button>
                </div>

            </div>
        </div >
    );
};

export default Service;