import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ErrorPage = () => {
    useTitle('Error Page');
    return (
        
        <div>
            <h1 className='text-5xl font-semibold p-4 text-center mt-28'>No Page Found | Go To <Link className='text-primary' to="/">Home</Link></h1>
        </div>

    );
};

export default ErrorPage;