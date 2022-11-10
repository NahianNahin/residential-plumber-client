import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import GoogleLogIn from '../../shared/GoogleLogIn/GoogleLogIn';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';


const Login = () => {
    useTitle('Log In')
    let navigate = useNavigate();
    let location = useLocation();
    const { login, setLoading } = useContext(AuthContext);
    let from = location.state?.from?.pathname || "/";
    const handleLoginUser = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,form,password);
        login(email, password)
            .then((userCredential) => {

                const user = userCredential.user;
                console.log(user);
                toast.success('SuccessFully Sign Up');
                
                const currentUser = {
                    email: user.email
                }
                // Get JWT Token
                fetch('https://my-assignment-11-server.vercel.app/jwt', {
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

                
                form.reset();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
            .finally(() => {
                setLoading(false);
            });
            
        

    }
    return (
        <div className="hero mt-10 mb-40">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6"> If you want to get my services, at first you need to login my website. If don't have any acount, you need to signup. Then place your order.</p>
                    <GoogleLogIn></GoogleLogIn>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-t-2 border-primary">
                    <form onSubmit={handleLoginUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="/login" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                <p> Don't Have Any Account ? Please <Link to='/signup' className="text-primary">Sign Up</Link></p>

                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;