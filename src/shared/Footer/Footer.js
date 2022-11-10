import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo-icon.png';
import { AuthContext } from '../../contexts/AuthProvider';

const Footer = () => {
    const { logout, user } = useContext(AuthContext);
    return (
        <footer className="footer items-center p-4  bg-white text-black border-t-2 pt-10 pl-20 ">
            <div className="">
                <img src={logo} alt="" className='w-auto h-20' />
                <p><span className='text-lg font-semibold'>Residential <span className='text-primary font-bold'>Plumber</span></span><br />Providing Services since 2005</p>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
            <div>
                <span className="footer-title">Pages</span>
                <Link to='/' className="link link-hover">Home</Link>
                <Link to='/services' className="link link-hover">Services</Link>
                <Link to='/blogs' className="link link-hover">Blogs</Link>
                {user?.uid && <Link to='/my_reviews' className="link link-hover">My Review</Link>}
                {user?.uid && <Link to='add_service' className="link link-hover">Add Services</Link>}

            </div>
            <div>
                <span className="footer-title">Important Links</span>
                {user?.uid
                    ?
                    <>
                        <Link to='/signup' className="link link-hover">Sign Up</Link>
                        <Link to='/login' className="link link-hover">Log In</Link>
                    </>
                    :
                    <Link ><button className="btn btn-link btn-xs p-0" onClick={logout}>Sign Out</button></Link>
                }


            </div>
        </footer>
    );
};

export default Footer;