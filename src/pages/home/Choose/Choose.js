import React from 'react';
import { FaHammer, FaRegIdBadge, FaUserAlt } from 'react-icons/fa';

const Choose = () => {
    return (
        <div className='mb-28'>
            <h1 className='text-center text-3xl my-10 font-semibold'><span className='text-primary'>Why</span> Choose <span className='text-primary'>Me</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className='card bg-base-100 shadow-xl border-t-4 border-primary pt-10 mx-10 lg:mx-2'>
                    <figure><FaUserAlt className='text-6xl'></FaUserAlt></figure>
                    <div className='card-body'>
                        <p className='card-title'>Expert In Work</p>
                        <p>I have been working for 30 years in this sectors.</p>
                    </div>
                </div>
                <div className='card bg-base-100 shadow-xl border-t-4 border-primary pt-10 mx-10 lg:mx-2'>

                    <figure><FaHammer className='text-6xl'></FaHammer></figure>
                    <div className='card-body'>
                        <p className='card-title'>Best Equipment</p>
                        <p>I used Best Equipment in my overall work.</p>
                    </div>
                </div>
                <div className='card bg-base-100 shadow-xl border-t-4 border-primary pt-10 mx-10 lg:mx-2'>
                    
                    <figure><FaRegIdBadge className='text-6xl'></FaRegIdBadge></figure>
                    <div className='card-body'>
                        <p className='card-title'>100% Guranty</p>
                        <p>My work is 100% Guranty. So you can trust on me.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Choose;