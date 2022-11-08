import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const details = useLoaderData();
    const { _id, title, img, service_charge, description } = details;
    return (
        <div>
            <h1 className='text-center text-3xl my-10 '>Service Details</h1>
            <div>
                
            </div>

        </div>
    );
};

export default ServiceDetails;