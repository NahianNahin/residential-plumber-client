import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Review from '../../../shared/Review/Review';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../../hooks/useTitle';

const ServiceDetails = () => {
    useTitle('Service Details')
    const details = useLoaderData();
    const { _id, title, img, service_charge, description } = details;
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://my-assignment-11-server.vercel.app/service_review?service=${details?._id}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('plumber-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                return setReviews(data)
            })
    }, [details?._id])
    return (
        <div>
            <div className='mb-20 shadow-lg border-t-2 border-primary p-5 mt-4 mx-2'>
                <h1 className='text-center text-4xl my-10 '>Service Details</h1>
                <div className='flex flex-col-reverse lg:flex-row justify-evenly items-center lg:gap-5'>
                    <div className='lg:w-2/3 p-5'>
                        <p className='text-left text-3xl font-semibold p-5'>{title}</p>
                        <p className='text-left  '>{description}</p>
                        <p className='text-left md:text-xl '>I provide my service at a very low cost--- <span className='text-primary lg:text-2xl font-semibold'>${service_charge}</span></p>
                        <Link to={`/add_reviews/${_id}`}><button className='btn btn-link'>Add Review</button></Link>
                    </div>
                    <div className='lg:w-1/3 p-2'>
                        <PhotoProvider>
                            <PhotoView src={img}>
                                <img className='rounded-lg' src={img} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                </div>
            </div>
            <h1 className='text-center text-3xl mb-10 '>Reviews : {reviews.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-28'>
                {
                    reviews.map(rev => <Review key={rev._id} rev={rev}></Review>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;