import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import Review from '../../../shared/Review/Review';
import Service from '../Service/Service';

const Services = () => {
    useTitle('Services');
    const services = useLoaderData();
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://my-assignment-11-server.vercel.app/reviews',{
            headers: {
                authorization: `Bearer ${localStorage.getItem('plumber-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h1 className='text-center text-3xl my-10 '>Services : {services.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <h1 className='text-center text-3xl mb-10 '>Reviews : {reviews.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20'>
                {
                    reviews.map(rev => <Review key={rev._id} rev={rev}></Review>)
                }
            </div>
        </div>
    );
};

export default Services;