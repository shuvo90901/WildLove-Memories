import React from 'react';

const Review = ({ review }) => {
    const { name, title, img, email } = review;
    console.log(review)
    return (
        <div className='card bg-gray-300 items-center my-5'>
            <div className='flex'>
                <img className='w-16 rounded-3xl' src={img} alt="" />
                <div>
                    <h5 className="text-xl">{name}</h5>
                    <h5 className="text-xl">{email}</h5>
                </div>
            </div>
        </div>
    );
};

export default Review;