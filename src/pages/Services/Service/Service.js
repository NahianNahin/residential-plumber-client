import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({ service }) => {
    const { title, img, service_charge, _id, description } = service;
    return (
        <div className="card bg-base-100 shadow-xl mx-10 md:mx-3">
            <figure className="px-2 pt-2">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="Shoes" className="rounded-xl lg:h-48 lg:w-80" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <p>
                    {
                        description.length > 100
                            ?
                            <p> {description.slice(0, 100) + '...'} <Link to={`/services/${_id}`} className='text-primary'>Read more</Link></p>
                            :
                            <p>{description}</p>
                    }
                </p>

                <div className="card-actions">
                    <p className='text-xl text-primary font-semibold text-left'>Charge : ${service_charge}</p>

                </div>
                <Link to={`/services/${_id}`}><button className='btn btn-sm w-full'>Show Details</button></Link>
            </div>
        </div>
    );
};

export default Service;