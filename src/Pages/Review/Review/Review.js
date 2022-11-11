import React from 'react';
import { FaStar } from 'react-icons/fa';
import ModalUpdate from '../../Shared/Modal/ModalUpdate';

const Review = ({ review, handleDelete }) => {
    const { name, discription, title, img, email, rating, _id, date } = review;



    return (
        <div>
            <div className='card bg-orange-200 items-center my-5 lg:grid grid-cols-4 md:mx-32 p-5'>
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
                    <p>{rating}</p>
                    <FaStar className='text-lime-500'></FaStar>
                    <FaStar className='text-lime-500'></FaStar>
                    <FaStar className='text-lime-500'></FaStar>
                    <FaStar className='text-lime-500'></FaStar>
                    <FaStar className='text-lime-500'></FaStar>
                    <div>
                        <p>{date}</p>
                    </div>
                </div>
                <div>
                    <p>{discription}</p>
                </div>
            </div>
            <div className='md:flex justify-center'>
                <ModalUpdate key={review._id}
                    review={review}></ModalUpdate>
                <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-success">Delete Review</button>
            </div>
        </div>
    );
};

export default Review;