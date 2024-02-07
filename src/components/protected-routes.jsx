import { useAuth } from "../contexts/auth-context";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
    const { token } = useAuth();

    // Check if the user is authenticated
    if (!token) {
        // If not authenticated, redirect to the login page
        return <Navigate to="/login" replace />;
    }

    // If authenticated, render the child routes
    return <Outlet />;
};

export default ProtectedRoutes;
