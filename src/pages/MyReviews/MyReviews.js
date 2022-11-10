import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import MyReview from './MyReview';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`, {
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
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('plumber-token')}`
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Delete:', data);
                    if (data.acknowledged) {
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
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-52'>
                {
                    reviews.map(rev => <MyReview key={rev._id} rev={rev} handleDeleteReview={handleDeleteReview}></MyReview>)
                }
            </div>

        </div>
    );
};

export default MyReviews;