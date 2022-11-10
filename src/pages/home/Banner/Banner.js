import React, { useEffect, useState } from 'react';
import Slide from './Slide';

const Banner = () => {
    const [banner, setBanner] = useState([]);
    useEffect(() => {
        fetch('https://my-assignment-11-server.vercel.app/banners')
            .then(res => res.json())
            .then(data => setBanner(data))
    }, [])
    return (
        <div className="carousel w-full my-10 ">
            {
                banner.map(slide => <Slide key={slide.id} slide={slide}></Slide>)
            }
        </div>
    );
};

export default Banner;