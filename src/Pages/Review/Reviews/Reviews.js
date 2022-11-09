import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const Reviews = () => {
    const reviews = useLoaderData();
    return (
        <div>
            {
                reviews.map(review => <Review
                    key={review._id}
                    review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;