import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const details = useLoaderData();
    const { _id, title, img, service_charge, description } = details;
    return (
        <div className='mb-52 shadow-lg border-t-2 border-primary p-5 mt-4 mx-2'>
            <h1 className='text-center text-4xl my-10 '>Service Details</h1>
            <div className='flex flex-col-reverse lg:flex-row justify-evenly items-center lg:gap-5'>
                <div className='lg:w-2/3 p-5'>
                    <p className='text-left text-3xl font-semibold p-5'>{title}</p>
                    <p className='text-left  '>{description}</p>
                    <p className='text-left md:text-xl '>I provide my service at a very low cost--- <span className='text-primary lg:text-2xl font-semibold'>${service_charge}</span></p>
                </div>
                <div className='lg:w-1/3 p-2'>
                    <img className='rounded-lg' src={img} alt="" />
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;