import React from 'react';
import { FaStar } from 'react-icons/fa';

const Review = ({ review, handleDelete }) => {
    const { name, discription, title, img, email, rating, _id } = review;
    console.log(review)



    return (
        <div>
            <div className='card bg-orange-200 items-center my-5 grid grid-cols-4 md:mx-32 p-5'>
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
            <button className="btn btn-outline btn-success">Edit Review</button>
            <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-success">Delete Review</button>
        </div>
    );
};

export default Review;