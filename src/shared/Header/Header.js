import React, { useContext } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
    const { logout } = useContext(AuthContext);
    const menuItems = <>
        <li><Link to='/' className='font-semibold'>Home</Link></li>
        <li><Link to='/services' className='font-semibold'>Services</Link></li>
        <li><Link to='/my_reviews' className='font-semibold'>My Reviews</Link></li>
        <li><Link to='/add_service' className='font-semibold'>Add Services</Link></li>
        <li><Link to='/blogs' className='font-semibold'>Blogs</Link></li>
        <li><Link to='/login' className='font-semibold'>Login</Link></li>


    </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <h1 className='text-2xl'>Residential <span className='text-primary'>Plumber</span></h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button onClick={logout} className='text-xl'><FaSignOutAlt></FaSignOutAlt></button>
            </div>
        </div>
    );
};

export default Header;