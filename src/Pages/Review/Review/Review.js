import React from 'react';
import { FaBeer, FaStar } from 'react-icons/fa';

const Review = ({ review }) => {
    const { name, discription, title, img, email, rating } = review;
    console.log(review)
    return (
        <div className='card bg-gray-300 items-center my-5 grid grid-cols-4 mx-5 p-5'>
            <div className='flex'>
                <img className='w-16 rounded-full' src={img} alt="" />
                <div>
                    <h5 className="text-xl">{name}</h5>
                    <h5 className="text-xl">{email}</h5>
                </div>
            </div>
            <div>
                <h3 className="text-3xl font-semibold"><i>{title}</i></h3>
            </div>
            <div className='flex items-center'>
                <FaStar className='text-lime-500'></FaStar>
                <FaStar className='text-lime-500'></FaStar>
                <FaStar className='text-lime-500'></FaStar>
                <FaStar className='text-lime-500'></FaStar>
                <FaStar className='text-lime-500'></FaStar>
                <p>{rating}</p>
            </div>
            <div>
                <p>{discription}</p>
            </div>
        </div>
    );
};

export default Review;