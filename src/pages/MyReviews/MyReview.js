import React from 'react';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyReview = ({ rev, handleDeleteReview }) => {
    const { User_name, review, user_img, rating, serviceName, _id } = rev;
    return (
        <div className='shadow-lg p-5 rounded-lg bg-slate-100 mx-10 md:mx-0'>
            <p className='text-center text-2xl mt-3 mb-7'>{serviceName}</p>
            <div className='flex justify-between items-center gap-5 '>
                <div>
                    <p className='font-semibold text-xl'>{User_name}</p>
                    <p className='font-serif'>{review}</p>
                    <p><span className='font-semibold'>Rating : </span><span className='text-primary'>{rating}</span></p>
                </div>
                <div className="avatar">
                    <div className="w-24 mask mask-squircle">
                        <img src={user_img} alt='user' />
                    </div>
                </div>
            </div>
            <div className='flex gap-5 items-center mt-5'>
                <button onClick={() => handleDeleteReview(_id)}><FaTrashAlt className='text-xl text-red-700'></FaTrashAlt></button>
                <Link to={`/edit_reviews/${_id}`}><button><FaRegEdit className='text-xl'></FaRegEdit></button></Link>
            </div>
        </div>
    );
};

export default MyReview;