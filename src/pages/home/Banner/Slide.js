import React from 'react';
import { Link } from 'react-router-dom';
import './Slide.css'

const Slide = ({slide}) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='img-gradient'>
            <img src={image} alt='' className=" rounded-xl slide_img" />
        </div>
        <div className="absolute  transform -translate-y-1/2  left-20 top-1/2">
            <p className='text-3xl lg:text-6xl text-white font-semibold my-5'>Lowest <br /> Charge For Plumber <br /> Servicing</p>
            <p className=' lg:text-2xl text-white font-semibold my-5'>I am providing plumber service at a very low cost.So place a order for the services.</p>
            <div className='mt-2 flex gap-3'>
                <Link to='/services'><button className="btn  btn-primary btn-sm lg:btn-md">Show Services</button></Link>
                
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
    </div>
    );
};

export default Slide;