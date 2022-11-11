import React, { useState } from 'react';

const ModalUpdate = ({ review }) => {
    const [discription, setDiscription] = useState(review.discription)


    const handleUpdateDiscription = event => {
        event.preventDefault();
        fetch(`https://wildlove-photography.vercel.app/reviews/${review._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(discription)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('discription updated');
                    console.log(data)
                    event.target.reset()
                }
            })
    }

    const handleInputChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newDiscription = {}
        newDiscription[field] = value;
        setDiscription(newDiscription)
    }
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="btn btn-outline btn-success">Edit Review</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleUpdateDiscription} className="card bg-orange-200 w-3/4 mx-auto  shadow-xl">
                        <label className="label  mt-3">
                            <span className="label-text">Please Share Your Review</span>
                        </label>
                        <textarea onChange={handleInputChange} name='discription' className="textarea textarea-bordered h-32" placeholder="Write Your Review Here"></textarea>
                        <button className="btn  btn-success font-bold">Give Advise</button>
                    </form>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalUpdate;