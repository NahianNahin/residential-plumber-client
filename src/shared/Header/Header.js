
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
    const { logout, user } = useContext(AuthContext);
    const menuItems = <>
        <li><Link to='/' className='font-semibold'>Home</Link></li>
        <li><Link to='/services' className='font-semibold'>Services</Link></li>
        <li><Link to='/blogs' className='font-semibold'>Blogs</Link></li>
        {user?.uid && <li><Link to='/my_reviews' className='font-semibold'>My Reviews</Link></li>}
        {user?.uid && <li><Link to='/add_service' className='font-semibold'>Add Services</Link></li>}
        <button onClick={logout} className='font-bold btn btn-sm btn-outline m-3 lg:m-0 lg:hidden'>Sign Out</button>




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
                {user?.uid
                    ?
                    <>
                        <div className="avatar p-4">
                            <div className="w-12  rounded-full">
                                <img src={user?.photoURL} alt='User' />
                            </div>
                        </div>
                        <button onClick={logout} className='font-bold btn btn-sm btn-outline hidden lg:inline-block'>Sign Out</button>
                        </>
                    :
                    <Link to='/login' className='font-bold text-xl text-primary'>Login</Link>}
            </div>
        </div>
    );
};

export default Header;