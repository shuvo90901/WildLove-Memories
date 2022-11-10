import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const ModalUpdate = ({ review }) => {
    console.log(review)
    const { user } = useContext(AuthContext)
    const handleInputChange = event => {
        const rating = event.target.rating.value;
        console.log(rating)
    }
    return (
        <div>
            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="btn btn-outline btn-success">Edit Review</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form className="card bg-orange-200 w-3/4 mx-auto  shadow-xl">
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
                                    <input onChange={handleInputChange} type="text"
                                        name='rating' placeholder="Please Give Rating" className="input input-bordered" required />
                                </div>
                            </div>
                            <label className="label  mt-3">
                                <span className="label-text">Please Share Your Review</span>
                            </label>
                            <textarea onChange={handleInputChange} name='discription' className="textarea textarea-bordered h-32" placeholder="Write Your Review Here"></textarea>
                        </div>
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