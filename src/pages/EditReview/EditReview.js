import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const EditReview = () => {

    const oldReview = useLoaderData();
    const { _id, serviceName, service } = oldReview;
    const { user } = useContext(AuthContext);
    // Handle For Edit Review 

    const handleEditReviews = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'Unregistered'
        const rating = form.rating.value;
        const review = form.review.value;

        const Review = {
            service,
            serviceName,
            User_name: user.displayName,
            date: new Date(),
            user_img: user.photoURL,
            email,
            review,
            rating
        }
        console.log(Review);
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('plumber-token')}`
            },
            body: JSON.stringify(Review),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Update:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        form.reset();
    }

    return (
        <div>

            <form onSubmit={handleEditReviews} className='card shadow-lg p-10 mx-10 lg:mx-28 mt-16 mb-52 border-t-2 border-primary'>
                <h1 className='text-center text-3xl my-5 '>Edit Your Review</h1>
                <p className='text-center text-xl'>Give your valueable review for <span className='text-primary font-semibold'>{serviceName}</span></p>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' defaultValue={user?.email} placeholder="Email" className="input input-bordered" readOnly />
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
                <button className='btn btn-primary'>Edit Review</button>
            </form>
        </div>
    );
};

export default EditReview;