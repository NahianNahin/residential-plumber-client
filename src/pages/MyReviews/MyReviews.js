import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReview from './MyReview';

const MyReviews = () => {
    useTitle('My Reviews')
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://my-assignment-11-server-nahiannahin.vercel.app/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('plumber-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    // Handle Delete Review
    const handleDeleteReview = id => {
        const accepted = window.confirm(`Are you want to delete order no. ${id}`);
        if (accepted) {
            fetch(`https://my-assignment-11-server-nahiannahin.vercel.app/review/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('plumber-token')}`
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Delete:', data);
                    if (data.acknowledged) {
                        toast.success('Review Delete Successfully');
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReviews(remaining);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }

    return (
        <div>

            <h1 className='text-center text-3xl my-10 '>My Reviews : {reviews.length}</h1>
            {!reviews.length && <p className='text-xl font-semibold text-center my-20'>No Review has added yet.</p>}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28'>
                {
                    reviews.map(rev => <MyReview key={rev._id} rev={rev} handleDeleteReview={handleDeleteReview}></MyReview>)
                }
            </div>

        </div>
    );
};

export default MyReviews;