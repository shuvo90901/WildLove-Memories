import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Review from '../Review/Review';

const ReviewServicePage = ({ id }) => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Delete?');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('successful');
                        const remaining = reviews.filter(rev => rev._id !== id)
                        setReviews(remaining)
                    }
                })

        }
    }

    const filterReview = reviews.filter(r => r.serviceId === id)
    return (
        <div className='mt-20'>
            {
                filterReview.map(review => <Review key={review._id}
                    review={review}
                    handleDelete={handleDelete}></Review>)
            }
        </div>
    );
};

export default ReviewServicePage;