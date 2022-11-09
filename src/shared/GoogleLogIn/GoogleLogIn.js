import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';
const GoogleLogIn = () => {
    const { googlelogIn } = useContext(AuthContext);
    // Handle For Google Login  
    const handleGoogleLogin = () => {
        googlelogIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <div className='mt-5'>
            <p className='text-xl font-semibold'>You can also Login with Google.</p>
            <button onClick={handleGoogleLogin} className='btn btn-outline btn-primary mt-3 w-1/2'><FaGoogle className='mx-4'></FaGoogle> Login With Google</button>
        </div>
    );
};

export default GoogleLogIn;