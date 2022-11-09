import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';


const PrivateRoutes = ({children}) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <p className='text-center text-2xl my-10 text-primary font-semibold'>Page Loading ...</p>
    }
    if (user && user?.uid) {
        return children;

    }
    return <Navigate to="/login" state={{ from: location }} replace />;
        
    
    
};

export default PrivateRoutes;