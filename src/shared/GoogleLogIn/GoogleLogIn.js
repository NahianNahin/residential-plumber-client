import React from 'react';
import { FaGoogle } from 'react-icons/fa';
const GoogleLogIn = () => {
    return (
        <div className='mt-5'>
            <p className='text-xl font-semibold'>You can also Login with Google.</p>
            <button className='btn btn-outline btn-primary mt-3 w-1/2'><FaGoogle className='mx-4'></FaGoogle> Login With Google</button>
        </div>
    );
};

export default GoogleLogIn;