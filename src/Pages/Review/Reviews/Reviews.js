import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../contexts/hooks/useTitle';
import Review from '../Review/Review';


const Reviews = () => {
    useTitle('Reviews')
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);

    // fetch review using email query
    useEffect(() => {
        fetch(`https://wildlove-photography.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Delete?');
        if (proceed) {
            fetch(`https://wildlove-photography.vercel.app/reviews/${id}`, {
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

    return (
        <div>
            {
                reviews.length !== 0 ?
                    <div>
                        {
                            reviews.map(review => <Review
                                key={review._id}
                                review={review}
                                handleDelete={handleDelete}></Review>)
                        }

                    </div>
                    :
                    <p className=' my-52 text-4xl font-bold'>No Reviews Were Added</p>
            }

        </div>
    );
};

export default Reviews;