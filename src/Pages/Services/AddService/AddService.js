import React from 'react';
import useTitle from '../../../contexts/hooks/useTitle';

const AddService = () => {
    // title adding hook
    useTitle('AddService')
    // adding service handler
    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const discription = form.discription.value;

        console.log(name, img, price, rating, discription)

        const service = {
            name,
            img,
            price,
            rating,
            discription
        }

        fetch('https://wildlove-photography.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Service Added Successfully');
                    form.reset();
                }
            })
    }
    return (
        <div className="py-20 min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-3/4  shadow-2xl bg-base-100 font-bold">
                    <form onSubmit={handleAddService} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Service Title</span>
                            </label>
                            <input type="text" name='title' placeholder="Enter Your Title Here" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Image URL</span>
                            </label>
                            <input type="text" name='img' placeholder="Enter Your Image URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Price</span>
                            </label>
                            <input type="text" name='price' placeholder="Enter Your Price Here" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Service Rating</span>
                            </label>
                            <input type="text" name='rating' placeholder="Enter Your Rating Here" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Enter Your Service Discription</span>
                            </label>

                            <textarea name='discription' className="textarea textarea-bordered" placeholder="Enter Your Discription Here" required></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;