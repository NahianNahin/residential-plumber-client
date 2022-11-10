import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../Services/Service/Service';

const MyServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://my-assignment-11-server-nahiannahin.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div >
            <h1 className='text-center text-3xl my-10 font-semibold'><span className='text-primary'>My</span> Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5'>
                {
                    services.slice(0, 3).map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <div className='flex justify-center'>
                <Link to='/services'><button className='btn btn-link btn-primary px-6'>See All</button></Link>
            </div>
        </div>
    );
};

export default MyServices;