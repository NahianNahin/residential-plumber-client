import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from '../Service/Service';

const Services = () => {
    const services = useLoaderData();
    return (
        <div>
            <h1 className='text-center text-3xl my-10 '>Services : {services.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;