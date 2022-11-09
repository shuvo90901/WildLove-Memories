import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const service = useLoaderData();
    const { name, img, discription, price, rating } = service;

    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const title = service.name;
        const email = form.email.value;
        const name = form.name.value;
        const img = form.photoURL.value;
        const rating = form.rating.value;
        const discription = form.discription.value;
        const review = {
            title,
            email,
            name,
            img,
            rating,
            discription
        }
        console.log(review)

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review Added Successfully');
                    form.reset();
                }
            })
    }
    return (
        <div>
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
            <form onSubmit={handleAddReview} className="card bg-orange-200 w-3/4 mx-auto  shadow-xl">
                <h3 className="text-3xl py-5">Give Review for {name}</h3>
                <div className="card-body">

                    <div className='md:grid grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email"
                                defaultValue={user?.email}
                                readOnly
                                name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text"
                                defaultValue={user?.displayName}
                                readOnly
                                name='name' placeholder="Enter Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your PhotoURL</span>
                            </label>
                            <input type="text"
                                defaultValue={user?.photoURL}
                                readOnly
                                name='photoURL' placeholder="Enter Your PhotoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Give Rating</span>
                            </label>
                            <input type="text"
                                name='rating' placeholder="Please Give Rating" className="input input-bordered" required />
                        </div>
                    </div>
                    <label className="label  mt-3">
                        <span className="label-text">Please Share Your Review</span>
                    </label>
                    <textarea name='discription' className="textarea textarea-bordered h-32" placeholder="Write Your Review Here"></textarea>
                </div>
                <button className="btn  btn-success font-bold">Give Advise</button>
            </form>
        </div>
    );
};

export default ServiceDetails;