import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import GoogleLogIn from '../../shared/GoogleLogIn/GoogleLogIn';
import toast from 'react-hot-toast';
import { setJwtToken } from '../../utilities/jwtToken';

const Signup = () => {
    let navigate = useNavigate();
    const { createUser, updateUserInfo } = useContext(AuthContext);

    const handleCreateUser = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const url = form.url.value;

        createUser(email, password)
        .then((userCredential) => {

            const user = userCredential.user;
            handleUpdateUserInfo(name, url)
            console.log(user);
            toast.success('SuccessFully Sign Up');
            setJwtToken(user);
            navigate('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    form.reset();
        
    }

    const handleUpdateUserInfo = (name, url) => {
        const profile = {
            displayName: name,
            photoURL: url
        }
        updateUserInfo(profile);
    }

    return (
        <div className="hero mt-10 mb-40">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6"> If you want to get my services, at first you need to login my website. If don't have any acount, you need to signup. Then place your order.</p>
                    <GoogleLogIn></GoogleLogIn>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-t-2 border-primary">
                    <form onSubmit={handleCreateUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='url' placeholder="Photo URL" className="input input-bordered" />
                        </div>
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
                                <p> Already Have An Account ? Go To <Link to='/login' className="text-primary">Login</Link></p>

                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;