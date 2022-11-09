import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AddReview = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    return (
        <div>

            <form className='card shadow-lg p-10 mx-10 lg:mx-28 mt-16 mb-52 border-t-2 border-primary'>
                <h1 className='text-center text-3xl my-5 '>Add Your Review</h1>
                <p className='text-center text-xl'>Give your valueable review for <span className='text-primary font-semibold'>{service.title}</span></p>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered" readOnly/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <textarea name='review' className="textarea textarea-primary h-24 w-full mb-4" placeholder="Review"></textarea>
                </div>
                <button className='btn btn-primary'>Add Review</button>
            </form>
        </div>
    );
};

export default AddReview;