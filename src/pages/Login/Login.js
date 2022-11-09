import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero mt-10 mb-40">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6"> If you want to get my services, at first you need to login my website. If don't have any acount, you need to signup. Then place your order.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-t-2 border-primary">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;