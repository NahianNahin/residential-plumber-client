import React from 'react';
import {  FaCalendarAlt,  FaPhone,  FaSearchLocation } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='mb-5'>
            <h1 className='text-center text-3xl my-10 font-semibold'>Contact <span className='text-primary'>Me</span></h1>
           
                <div className="flex justify-evenly items-center flex-col lg:flex-row">
                    <div >
                        <div className='flex justify-center items-center gap-3'>
                            <div className='w-20 h-20'>
                                <FaCalendarAlt className='text-6xl'></FaCalendarAlt>
                            </div>
                            <div>
                                <p className='badge badge-ghost font-serif text-xs'>I am available monday-friday</p>
                                <p className='text-2xl font-serif font-semibold'>7:00 am - 9:00 pm</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-3'>
                            <div className='w-20 h-20'>
                                <FaPhone className='text-6xl'></FaPhone>
                            </div>
                            <div>
                                <p className='badge badge-ghost font-serif text-xs'>Have a question?</p>
                                <p className='text-2xl font-serif font-semibold'>+880 1970 201717 </p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center gap-3'>
                            <div className='w-20 h-20'>
                                <FaSearchLocation className='text-6xl'></FaSearchLocation>
                            </div>
                            <div>
                                <p className='badge badge-ghost font-serif text-xs'>Need a repair? our address</p>
                                <p className='text-2xl font-serif font-semibold'>20 Street, New York</p>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="textarea textarea-accent" placeholder="Message"></textarea>
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">send</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
       
    );
};

export default Contact;