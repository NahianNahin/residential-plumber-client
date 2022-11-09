import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import MyReview from './MyReview';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user.email])

    
    return (
        <div>
            <h1 className='text-center text-3xl my-10 '>My Reviews : {reviews.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-52'>
                {
                    reviews.map(rev => <MyReview key={rev._id} rev={rev}></MyReview>)
                }
            </div>

        </div>
    );
};

export default MyReviews;