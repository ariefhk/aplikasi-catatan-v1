import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';

const AnonymousRoutes = () => {
    const { token } = useAuth();

    // Check if the user is authenticated
    if (!token) {
        // If not authenticated, render the child routes
        return <Outlet />;
    }
    // If authenticated, redirect to the home page
    return <Navigate to='/' replace />;
};

AnonymousRoutes.displayName = 'AnonymousRoutes';

const ProtectedRoutes = () => {
    const { token } = useAuth();

    // Check if the user is authenticated
    if (!token) {
        // If not authenticated, redirect to the login page
        return <Navigate to='/login' replace />;
    }

    // If authenticated, render the child routes
    return <Outlet />;
};

ProtectedRoutes.displayName = 'ProtectedRoutes';

export { AnonymousRoutes, ProtectedRoutes };
