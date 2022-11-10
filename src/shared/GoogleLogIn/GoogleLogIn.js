import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';




const GoogleLogIn = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const { googlelogIn, setLoading } = useContext(AuthContext);
    let from = location.state?.from?.pathname || "/";
    // Handle For Google Login  
    const handleGoogleLogin = () => {
        googlelogIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success('Successfully Google Login.');

                const currentUser = {
                    email: user.email
                }
                // Get JWT Token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(currentUser),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('Success:', data);
                        // Store in Local-Storage
                        localStorage.setItem('plumber-token', data.token);
                        navigate(from, { replace: true });
                    })


            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
            .finally(() => {
                setLoading(false);
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